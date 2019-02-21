
const knex = require("../db/knex.js");

module.exports = {
// Pull all products
getAll: function(req, res) {
    // res.send("is this working");
    knex("products")
        .then((results)=>{
            console.log("results obtained");
            res.json(results)
            console.log("post results");
        })
        .catch((err)=> {
            console.log("this is an error", err)
        })
},
    // Add a single product
    addProduct: (req,res) => {
        knex('products')
            .insert(req.body)
            .then((products)=> {
                res.json(products)
        })
    },
    // Edit a product by id
    editProduct: (req, res) => {
        knex('products').update(req.body).where('id', req.params.id).then((results) => {
            res.send(200)
        })
    },
    // delete a product by id
    deleteProduct: (req, res) => {
        knex('products').del().where('id', req.params.id).then((results) =>{
            res.send(200)
        })
    }
}

