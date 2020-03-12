var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var mailsender = require('./mailsend.js');


router.get('/', function(req, res){

var mailOptions = {
  from: 'onkarhasabe1@gmail.com',
  to: 'onkarhasabe30@gmail.com',
  subject: 'reguaring assignment status',
  text: `assignment done successfully`
};

mailsender.senderfunction(mailOptions);

res.json(mailOptions);
});

module.exports = router;