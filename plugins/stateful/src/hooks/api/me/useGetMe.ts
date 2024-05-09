import { useQuery } from '@tanstack/react-query';
import { identityApiRef, useApi } from '@backstage/core-plugin-api';
import axios from 'axios';
import useUrl from '../useUrl';

export const GET_ME = 'GET_ME';

export const useGetMe = () => {
  const identityApi = useApi(identityApiRef);
  const { getUrl } = useUrl();
  const url = getUrl('/api/stateful/me');

  return useQuery({
    queryKey: [GET_ME],
    queryFn: async () => {
      const { token } = await identityApi.getCredentials();
      const res = await axios.get<{
        statefulToken: string;
      }>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },
    enabled: !!url,
  });
};
