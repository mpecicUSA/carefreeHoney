
exports.up = function(knex, Promise) {
    return knex.schema.createTable('reviews', (table) => {
        table.increments();
        table.integer("product_id")
            .references("id")
            .inTable("products")
            .onDelete("CASCADE")
            .notNullable()
            .index();
        table.integer("user_id")
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .notNullable()
            .index();
        table.text('review')
        table.timestamps(true,true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('reviews');
};
