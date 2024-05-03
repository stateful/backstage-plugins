import { configApiRef, useApi } from '@backstage/core-plugin-api';

const useUrl = () => {
  const configApi = useApi(configApiRef);
  const backendUrl = configApi.getString('backend.baseUrl');

  const getUrl = (url: string) => `${backendUrl}${url}`;

  return {
    getUrl,
  };
};

export default useUrl;
