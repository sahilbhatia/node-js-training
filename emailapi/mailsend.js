const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer');
const file= require('./sendNotification.js');

function senderFunction(mailOptions){
	var transporter = nodeMailer.createTransport({
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
};
 
module.exports = {
	senderFunction
}

