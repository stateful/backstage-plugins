import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { statefulPlugin, StatefulPage } from '../src/plugin';

createDevApp()
  .registerPlugin(statefulPlugin)
  .addPage({
    element: <StatefulPage />,
    title: 'Root Page',
    path: '/stateful',
  })
  .render();
