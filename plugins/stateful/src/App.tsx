import '@github/relative-time-element';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { Splash } from './components/Splash';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Splash />
    </QueryClientProvider>
  );
};
