const { Router } = require('express');
const { drinksController } = require('../controllers/drinks.controller');

const router = Router();

router.post('/drinks', drinksController.addDrink);
router.delete('/drinks', drinksController.deleteDrinks);
router.get('/drinks', drinksController.getAllDrinks);
router.get('/drinks:id', drinksController.getDrinkById);
router.patch('/drinks/:id', drinksController.patchDrinkById);
router.delete('/drinks/:id', drinksController.deleteDrinkById);
router.get('/drinks/stuck', drinksController.getDrinksInStuck);


module.exports = router;