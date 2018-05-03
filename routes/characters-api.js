const express = require('express');
const router  = express.Router();
const Character = require('../models/character');

// this route will be /api/characters, see app.js for details
router.get('/characters', (req, res, next) => {
	Character.find()
	.then((theList) => { 
		console.log('A string')
		res.json(theList)
	})
	.catch((err) => {
		console.log(err)
		next(err);
	});
});

router.get('/characters/:id', (req, res, next) => {
	Character.findById(req.params.id)
	.then(theCharacter => {
		console.log(theCharacter);
	})
	.catch((err) => {
		console.log(err)
		next(err);
	});
});

module.exports = router;
