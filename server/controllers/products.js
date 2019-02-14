
const knex = require("../db/knex.js");

module.exports = {
// Pull all games
    getAll: function(req, res) {
    // res.send("is this working");
    knex("products")
        .then((results)=>{
            res.json(results)
        })
    }
}