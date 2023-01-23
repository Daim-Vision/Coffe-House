const mongoose = require("mongoose");

const drinksSchema = mongoose.Schema({
    name: String,
    price: String,
    inStock: Number,
    caffeine: Boolean,
    volume: String,
    description:String
});


const Drinks = mongoose.model('Drinks', drinksSchema);

module.exports = Drinks;