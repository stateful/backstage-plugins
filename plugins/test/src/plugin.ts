import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const statefulPlugin = createPlugin({
  id: 'stateful',
  routes: {
    root: rootRouteRef,
  },
});

export const StatefulPage = statefulPlugin.provide(
  createRoutableExtension({
    name: 'StatefulPage',
    component: () =>
      import('./components/Splash').then(m => m.Splash),
    mountPoint: rootRouteRef,
  }),
);
