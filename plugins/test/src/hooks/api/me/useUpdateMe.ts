import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import useUrl from '../useUrl';
import {
  alertApiRef,
  identityApiRef,
  useApi,
} from '@backstage/core-plugin-api';
import { GET_ME } from './useGetMe';

const useUpdateMe = () => {
  const { getUrl } = useUrl();
  const identityApi = useApi(identityApiRef);
  const url = getUrl('/api/stateful/me');
  const queryClient = useQueryClient();
  const alertApi = useApi(alertApiRef);

  return useMutation({
    mutationFn: async ({ statefulToken }: { statefulToken: string }) => {
      const { token } = await identityApi.getCredentials();

      return axios.patch(
        url,
        { statefulToken },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    },
    onMutate: async () => {
      queryClient.removeQueries({
        queryKey: [GET_ME],
      });

      alertApi.post({
        message: 'Profile updated',
        severity: 'success',
      });
    },
    onError: () => {
      alertApi.post({
        message: 'Failed to update profile',
        severity: 'error',
      });
    },
  });
};

export default useUpdateMe;
