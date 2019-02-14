
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('purchases').del()
    .then(function () {
      // Inserts seed entries
      return knex('purchases').insert([
        { 
          product_id: 1,
          user_id: 1
        }, { 
          product_id: 2,
          user_id: 1
        }, { 
          product_id: 3,
          user_id: 1
        },
    
      ]);
    });
};
