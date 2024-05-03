import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import {
  GetLogListQuery,
  GetLogListQueryVariables,
} from '../../../__generated__/graphql';
import { GET_LOGS_LIST } from '../../../graphql/queries';
import useUrl from '../useUrl';
import { useGetMe } from '../me/useGetMe';

export const useGetAllLogs = () => {
  const { getUrl } = useUrl();
  const url = getUrl('/api/proxy/stateful/graphql');
  const { data } = useGetMe();

  return useQuery({
    queryKey: ['GET_LOGS_LIST'],
    queryFn: () =>
      request<GetLogListQuery, GetLogListQueryVariables>(
        url,
        GET_LOGS_LIST,
        {
          // TODO: Implement pagination after POC is validated
          page: 1,
          take: 9999,
        },
        {
          // TODO: Calling useGetMe every time is not efficient. It works now that we will implement a plugin POC, but it should be moved to a context or state to avoid unnecessary calls.
          authorization: `Bearer ${data?.statefulToken}`,
          'Auth-Provider': 'auth0',
        },
      ),
    enabled: !!url && !!data?.statefulToken,
  });
};
