import { configApiRef, useApi } from '@backstage/core-plugin-api';

const useGetConfig = () => {
  const configApi = useApi(configApiRef);
  const config = configApi.get('stateful') as {
    appUrl: string;
  };

  return config;
};

export default useGetConfig;
