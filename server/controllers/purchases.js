const knex = require("../db/knex.js");

module.exports = {
// Pull all purchases
    getAll: function(req, res) {
    // res.send("is this working");
    knex("purchases")
        .then((results)=>{
            res.json(results)
        })
    }
}