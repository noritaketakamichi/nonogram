exports.up = function(knex) {
    return knex.schema.createTable("pictures", (table) => {
        table.increments().primary();

        table.text("name");

        table.text("introduction");

        table.text("author");

        table.text("numbers");

        table.text("picArray");
    });
};

exports.down = function(knex) {

    return knex.schema.dropTable("pictures");
};