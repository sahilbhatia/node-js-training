const express = require('express');
const parser = require('body-parser');
const { validate, valError, Joi } = require('express-validation');
const userValidation = {
  body: Joi.object({
    id: Joi.number().positive().required(),
    email: Joi.string().email().required(),
    name: Joi.string().regex(/^[a-zA-Z]{3,30}$/),
    mobile: Joi.string().regex(/^[6-9][0-9]{9}$/)

  })
}

const updateValidation = {
  body: Joi.object({
    name: Joi.string().regex(/^[a-zA-Z]{3,30}$/),
    mobile: Joi.string().regex(/^[6-9][0-9]{9}$/)
  })
}


module.exports = {
  userValidation,
  validate,
  valError,
  Joi,
  updateValidation
}