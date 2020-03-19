const express = require('express');
const router = express.Router();
const user = require('./controller');

const { check, validationResult } = require('express-validator');

router.post('/user',[
	check('email').isEmail(),
	check('mobile_no').isLength({ min: 10 },
	)
	],user.create);


 router.get('/user', user.findAll);

 router.get('/user/:email',[
	check('email').isEmail()
	], user.findOne);

 router.put('/user/:oldemail',[
	check('oldemail').isEmail(),
	check('email').isEmail(),
	check('mobile_no').isLength({ min: 10 },
	)
	], user.update);

 router.delete('/user/:email',[
	check('email').isEmail()
	], user.delete);

module.exports = router;


