import {
  ApolloClient,
  ApolloLink,
  FetchResult,
  HttpLink,
  InMemoryCache,
  Operation,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';
import { Client, ClientOptions, createClient } from 'graphql-sse';

import { Observable } from '@apollo/client/core';
import { print } from 'graphql';

class SSELink extends ApolloLink {
  private client: Client;

  constructor(options: ClientOptions) {
    super();
    this.client = createClient(options);
  }

  public request(operation: Operation): Observable<FetchResult> {
    return new Observable(sink => {
      return this.client.subscribe<FetchResult>(
        { ...operation, query: print(operation.query) },
        {
          next: sink.next.bind(sink),
          complete: sink.complete.bind(sink),
          error: sink.error.bind(sink),
        },
      );
    });
  }
}

export const initializeClient = (uri: string, token?: string) => {
  const httpLink = new HttpLink({ uri });

  const sseLink = new SSELink({
    url: uri,
    headers: () => {
      return {
        authorization: `Bearer ${token}`,
        'Auth-Provider': 'auth0',
      };
    },
  });

  const authLink = setContext(async () => {
    return {
      headers: {
        authorization: `Bearer ${token}`,
        'Auth-Provider': 'auth0',
      },
    };
  });

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    sseLink,
    authLink.concat(httpLink),
  );

  const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  });

  return client;
};
