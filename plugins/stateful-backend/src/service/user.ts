import { Knex } from 'knex';

type User = {
  id: number;
  ref: string;
  statefulToken: string;
  createdAt: string;
  updatedAt: string;
};

const getOne = async (dbClient: Knex, where: Partial<User>) => {
  const [user] = await dbClient<User>('users')
    .select('*')
    .where(where)
    .limit(1);

  return user;
};

const upsert = async (
  dbClient: Knex,
  user: Partial<User>,
  merge: (keyof User)[],
) => {
  await dbClient<User>('users').insert(user).onConflict('ref').merge(merge);
};

export const users = {
  getOne,
  upsert,
};
