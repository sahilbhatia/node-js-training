const express = require('express');
const router = express.Router();
const user = require('./controller');
//const { validate, ValidationError, Joi } = require('express-validation');
const { check, validationResult } = require('express-validator');
//Add user in the Database
router.post('/user',[
	check('email').isEmail()
	],user.autheticateToken,user.create);
//check username and password
router.post('/user/login/',user.checkUser);

 // Retrieve all user
 router.get('/user',user.autheticateToken, user.findAll);

 // Retrieve a single User with userEmail
 router.get('/user/:email',user.autheticateToken, user.findOne);

 // Update a user with userEmail
 router.put('/user/:email',user.autheticateToken, user.update);

 // Delete a user with userEmail
 router.delete('/user/:email',user.autheticateToken, user.delete);

 //Set password with userEmail
 router.put('/user/setpassword/:email',user.autheticateToken,user.updatePassword);

 router.use(function(err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }
  return res.status(500).json(err)
})
module.exports = router;
