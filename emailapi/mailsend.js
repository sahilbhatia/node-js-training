var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var file= require('./sendnotification.js');


  function senderfunction(mailOptions){
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'onkarhasabe1@gmail.com',
    pass: 'popatraohasabe'
  }
});

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

 }
 

module.exports = {

	senderfunction

}
