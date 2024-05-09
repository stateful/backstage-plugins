import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { createRouter } from './service/router';
import { applyDatabaseMigrations } from './migrations';

/**
 * statefulPlugin backend plugin
 *
 * @public
 */
export const statefulPlugin = createBackendPlugin({
  pluginId: 'stateful',
  register(env) {
    env.registerInit({
      deps: {
        httpRouter: coreServices.httpRouter,
        logger: coreServices.logger,
        database: coreServices.database,
        userInfo: coreServices.userInfo,
        httpAuth: coreServices.httpAuth,
      },
      async init({ httpRouter, logger, httpAuth, userInfo, database }) {
        const dbClient = await database.getClient();

        if (!database.migrations?.skip) {
          logger.info('Performing database migration');
          await applyDatabaseMigrations(dbClient);
        }
        httpRouter.use(
          await createRouter({
            logger,
            httpAuth,
            userInfo,
            dbClient,
          }),
        );
        httpRouter.addAuthPolicy({
          path: '/health',
          allow: 'unauthenticated',
        });
      },
    });
  },
});
