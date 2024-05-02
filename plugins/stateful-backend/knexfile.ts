
import { Knex } from 'knex';
import { getVoidLogger, loadBackendConfig } from '@backstage/backend-common';

module.exports = async (): Promise<Knex.Config> => {
  const backstageConfig = await loadBackendConfig({
    logger: getVoidLogger(),
    argv: process.argv,
  });

  const databaseConfig = backstageConfig.getConfig("backend.database")
  const dbConnection = databaseConfig.get<Knex.ConnectionConfig>('connection');
  const prefix = databaseConfig.getOptionalString('prefix') || 'backstage_plugin_'

  return {
    client: databaseConfig.getString('client'),
    connection: {
      ...dbConnection,
      database: `${prefix}stateful`,
    }
  };
};