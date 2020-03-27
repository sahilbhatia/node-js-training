  const express = require('express');
  const router = express.Router();
  const valid = require('/home/jitendra/Node-Js_Training/git_training/node-js-training/mongooseCrud/validation/validation')
  const bodyParser = require('body-parser');
  router.use(bodyParser.json());
  const { validate, ValidationError, Joi } = require('express-validation');


  const userValidation = {
    body: Joi.object({
      name:Joi.string().required(),
      email: Joi.string().email().required(),
      adhar: Joi.string().min(10).max(12).pattern(/^\d{12}$/).required(),
      mobile:Joi.string().min(10).max(10).pattern(/^\d{10}$/).required(),
      pan:Joi.string().min(10).max(10).pattern(/([A-Z]){5}([0-9]){4}([A-Z]){1}$/).required()
    }),
  }
   const emailValidation = {
    email: Joi.string().email().required(),
  }

  const user = require('/home/jitendra/Node-Js_Training/git_training/node-js-training/mongooseCrud/controllers/controller.js');


  router.get('/',user.findAll);

  router.post('/add',validate(userValidation),user.create);

  router.delete('/delete/:email',user.delete)

  router.put('/update/:email',user.update)

  router.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err)
    }
  });
module.exports = router;


