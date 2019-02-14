
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          title: 'Desert Flower Honey', 
          size: "8oz", 
          quantity: 500, 
          details:"Only the best",
          price: 12,
          sale: false,
          free_shipping: false
        }, {
          title: 'Desert Flower Honey', 
          size: "16oz", 
          quantity: 500, 
          details:"Only the best",
          price: 20,
          sale: false,
          free_shipping: false
        }, {
          title: 'Mesquite Honey', 
          size: "8oz", 
          quantity: 500, 
          details:"Slightly crystalized for best flavor",
          price: 12,
          sale: false,
          free_shipping: false
        },
        {
          title: 'Mesquite Honey', 
          size: "16oz", 
          quantity: 500, 
          details:"Slightly crystalized for best flavor",
          price: 20,
          sale: false,
          free_shipping: false
        },{
          title: 'Sonoran Desert Honey', 
          size: "8oz", 
          quantity: 500, 
          details:"Slightly crystalized for best flavor",
          price: 12,
          sale: false,
          free_shipping: false
        },{
          title: 'Sonoran Desert Honey', 
          size: "16oz", 
          quantity: 500, 
          details:"Slightly crystalized for best flavor",
          price: 20,
          sale: false,
          free_shipping: false
        }
      ]);
    });
};
