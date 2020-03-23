const express = require('express');
const router = express.Router();
const user = require('./controller');
//const { validate, ValidationError, Joi } = require('express-validation');
const { check, validationResult } = require('express-validator');
// const loginValidation = {
//   body: Joi.object({
//     id : Joi.number(),
//     name : Joi.string(),
//     email: Joi.string()
//       .email(),
//       location : Joi.string(),
//       password : Joi.string()
//   }),
// }

//Add user in the Database
router.post('/user',[
	check('email').isEmail()
	],/*validate(loginValidation),*/user.create);
//check username and password
router.put('/user/checkuser/:email',user.checkUser);

 // Retrieve all user
 router.get('/user', user.findAll);

 // Retrieve a single User with userEmail
 router.get('/user/:email', user.findOne);

 // Update a user with userEmail
 router.put('/user/:email', user.update);

 // Delete a user with userEmail
 router.delete('/user/:email', user.delete);

 //Set password with userEmail
 router.put('/user/setpassword/:email',user.updatePassword);

 router.use(function(err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }
  return res.status(500).json(err)
})
module.exports = router;
