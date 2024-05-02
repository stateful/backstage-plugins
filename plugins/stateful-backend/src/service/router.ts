import { errorHandler } from '@backstage/backend-common';
import {
  HttpAuthService,
  LoggerService,
  UserInfoService,
} from '@backstage/backend-plugin-api';
import express from 'express';
import Router from 'express-promise-router';
import { Knex } from 'knex';
import { users } from './user';

export interface RouterOptions {
  logger: LoggerService;
  userInfo?: UserInfoService;
  httpAuth?: HttpAuthService;
  dbClient?: Knex;
}

const getUserInfo = async (
  userInfo: UserInfoService,
  httpAuth: HttpAuthService,
  req: Express.Request,
) => {
  // Cast to any because the types are not compatible
  const credentials = await httpAuth.credentials(req as any, {
    // This rejects request from non-users. Only use this if your plugin needs to access the
    // user identity, most of the time it's enough to just call `httpAuth.credentials(req)`
    allow: ['user'],
  });

  return userInfo.getUserInfo(credentials);
};

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger, httpAuth, userInfo, dbClient } = options;

  const router = Router();

  
  router.use(express.json());
  
  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.json({ status: 'ok' });
  });
  
  if (!userInfo || !dbClient || !httpAuth) {
    return router;
  }

  router.get('/me', async (req, res) => {
    const _userInfo = await getUserInfo(userInfo, httpAuth, req);

    const user = await users.getOne(dbClient, {
      ref: _userInfo.userEntityRef,
    });

    res.json(user);
  });

  router.patch('/me', async (req, res) => {
    const _userInfo = await getUserInfo(userInfo, httpAuth, req);

    const { statefulToken } = req.body as {
      statefulToken: string;
    };

    await users.upsert(
      dbClient,
      {
        ref: _userInfo.userEntityRef,
        statefulToken,
      },
      ['statefulToken'],
    );

    const user = await users.getOne(dbClient, {
      ref: _userInfo.userEntityRef,
    });

    res.json(user);
  });

  router.use(errorHandler());
  return router;
}
