
exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', (table) => {
        table.increments();
        table.string('title');
        table.string('size');
        table.integer('quantity');
        table.string('details');
        table.integer('price');
        table.boolean('sale');
        table.boolean('free_shipping');
        table.timestamps(true,true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('products');
};
