const { json } = require("express");
const Drinks = require("../models/Drink.model")

module.exports.drinksController = {

    addDrink: (req, res) => {
        Drinks.create({
            name: req.body.name,
            price: req.body.price,
            inStock: req.body.inStock,
            caffeine: req.body.caffeine,
            volume: req.body.volume,
            description: req.body.description
        }).then((drinks) => {
            res.json(drinks)
        }).catch (err => {
            res.json('Ошибка при добавлении напитка')})
        
    },

    deleteDrinks: (req, res) => {
        Drinks.deleteMany().then(() => {
            res.json('Все напитки удалены')
        })
    },

    getAllDrinks: (req, res) => {
        Drinks.find({}, {"name": req.body.name, "price": req.body.price}).then((drinks) => {
            res.json(drinks)
        })
    },

    getDrinkById: (req, res) => {
        Drinks.findById(req.params.id).then((drinks) =>{
            res.json(drinks)
        }) 
    },

    patchDrinkById: (req, res) => {
        Drinks.findByIdAndUpdate(req,params.id).then((drinks) => {
            res.json(drinks)
        })
    },

    deleteDrinkById: (req, res) => {
        Drinks.findByIdAndDelete(req.params.id).then((drinks) => {
            res.json(drinks)
        })
    }
};
