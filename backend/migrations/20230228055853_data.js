exports.up = function (knex) {
  return knex.schema.createTable("data", (table) => {
    table.increments();
    table.string("description");
    table.string("pattern");
    table.string("instruction");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("data");
};
