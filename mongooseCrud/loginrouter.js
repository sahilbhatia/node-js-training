const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const { body, validationResult } = require('express-validator')
const user = require('./controller.js');

router.put('/set',[body('email').isEmail().normalizeEmail(),
            body('password').isLength({ min: 5,max: 10}).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)],user.set);

router.post('/login',[body('username').isEmail(),
            body('password').isLength({ min: 5,max: 10}).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)],user.findOne);

module.exports = router;