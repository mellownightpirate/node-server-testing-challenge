exports.up = function(knex) {
    return knex.schema.createTable("characters", table => {
      table.increments();
      table
        .string("name", 128)
        .notNullable()
        .unique();
      table.float("age");
      table.string("location").notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("characters");
  };