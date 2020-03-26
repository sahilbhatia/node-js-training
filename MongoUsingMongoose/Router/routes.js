const express = require('express');
const router = express.Router();
const user = require('../controller/controller');
const authObj = require('../helperClasses/authentication');
//const { validate, ValidationError, Joi } = require('express-validation');
const { check, validationResult } = require('express-validator');
//Add user in the Database
router.post('/user',[
	check('email').isEmail()
	],authObj.validateToken,user.create);
//check username and password
router.post('/user/login/',user.checkUser);

 // Retrieve all user
 router.get('/user',authObj.validateToken,user.findAll);

 // Retrieve a single User with userEmail
 router.get('/user/:email',authObj.validateToken, user.findOne);

 // Update a user with userEmail
 router.put('/user/:email',authObj.validateToken, user.update);

 // Delete a user with userEmail
 router.delete('/user/:email',authObj.validateToken, user.delete);

 //Set password with userEmail
 router.put('/user/setpassword/:email',authObj.validateToken,user.updatePassword);

 router.use(function(err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }
  return res.status(500).json(err)
})
module.exports = router;
