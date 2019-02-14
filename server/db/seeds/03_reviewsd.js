
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        { 
          product_id: 1,
          review:"Fantastic, 10/10",
          user_id: 1
      },
      ]);
    });
};
