const express = require('express');
const router = express.Router();
const user = require('./controller');
const { check } = require('express-validator');

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
	],user.update);
	
 router.put('/setUser/:oldemail',[
	check('oldemail').isEmail(),
	check('mobile_no').isLength({ min: 10 },
	)
	],user.setUser);
 
 router.delete('/user/:email', [
	check('email').isEmail()
	],user.delete);
 
  router.put('/login/:email',[
	check('email').isEmail()
	], user.login);
 
 router.delete('/user/:email', [
	check('email').isEmail()
	],user.delete);
 
 router.get('/getData/:token',user.getData);
module.exports = router;



