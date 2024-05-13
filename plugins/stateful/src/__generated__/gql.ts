/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetLogList($page: Int!, $take: Int, $filters: JSON) {\n    logs(page: $page, take: $take, filters: $filters) {\n      data {\n        createTime\n        data\n        id\n        logType {\n          description\n          name\n        }\n        user {\n          id\n          email\n          photoUrl\n          displayName\n        }\n      }\n      meta {\n        totalPages\n      }\n    }\n  }\n": types.GetLogListDocument,
    "\n  query getChatResponse($input: ChatInput!) {\n    assistant {\n      chat(input: $input) {\n        session {\n          id\n          expirySecs\n          collectionName\n        }\n        question\n        response\n        commands\n        hits {\n          document\n          distance\n          metadata {\n            key\n            value\n          }\n        }\n      }\n    }\n  }\n": types.GetChatResponseDocument,
    "\n  query getMe {\n    me {\n      id\n      photoUrl\n    }\n  }\n": types.GetMeDocument,
    "\n  subscription SubscriptionChat {\n    chat {\n      message\n      token\n      done\n    }\n  }\n": types.SubscriptionChatDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLogList($page: Int!, $take: Int, $filters: JSON) {\n    logs(page: $page, take: $take, filters: $filters) {\n      data {\n        createTime\n        data\n        id\n        logType {\n          description\n          name\n        }\n        user {\n          id\n          email\n          photoUrl\n          displayName\n        }\n      }\n      meta {\n        totalPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLogList($page: Int!, $take: Int, $filters: JSON) {\n    logs(page: $page, take: $take, filters: $filters) {\n      data {\n        createTime\n        data\n        id\n        logType {\n          description\n          name\n        }\n        user {\n          id\n          email\n          photoUrl\n          displayName\n        }\n      }\n      meta {\n        totalPages\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getChatResponse($input: ChatInput!) {\n    assistant {\n      chat(input: $input) {\n        session {\n          id\n          expirySecs\n          collectionName\n        }\n        question\n        response\n        commands\n        hits {\n          document\n          distance\n          metadata {\n            key\n            value\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getChatResponse($input: ChatInput!) {\n    assistant {\n      chat(input: $input) {\n        session {\n          id\n          expirySecs\n          collectionName\n        }\n        question\n        response\n        commands\n        hits {\n          document\n          distance\n          metadata {\n            key\n            value\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getMe {\n    me {\n      id\n      photoUrl\n    }\n  }\n"): (typeof documents)["\n  query getMe {\n    me {\n      id\n      photoUrl\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription SubscriptionChat {\n    chat {\n      message\n      token\n      done\n    }\n  }\n"): (typeof documents)["\n  subscription SubscriptionChat {\n    chat {\n      message\n      token\n      done\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;