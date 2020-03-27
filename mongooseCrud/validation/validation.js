const { validate, ValidationError, Joi } = require('express-validation');

const userValidation = {
  body: Joi.object({
    name:Joi.string().required(),
    email: Joi.string().email().required(),
    adhar: Joi.string().min(10).max(10).pattern(/^\d{12}$/).required(),
    mobile:Joi.string().min(10).max(10).pattern(/^\d{10}$/).required(),
    pan:Joi.string().min(10).max(10).pattern(/([A-Z]){5}([0-9]){4}([A-Z]){1}$/).required()
  }),
}
 const emailValidation = {
  email: Joi.string().email().required(),
}

module.exports = [userValidation,emailValidation]