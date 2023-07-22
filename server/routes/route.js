const router = require('express').Router();


//import Controller
const gamesController = require('../controller/gamesControl');

// Endpoint to handle the spin request
router.post('/spin', gamesController.getGames);

//export router
module.exports = router;  