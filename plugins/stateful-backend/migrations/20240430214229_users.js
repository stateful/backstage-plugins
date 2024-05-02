exports.up = async function up(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('ref').unique();
    table.text('statefulToken').unique();
    table.timestamps(true, true);
  });
};

exports.down = async function down(knex) {
  return knex.schema.dropTable('users');
};
