const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer');
const mailSender = require('./mailsend.js');

router.get('/', function(req, res){

	var mailOptions = {
	from: 'onkarhasabe1@gmail.com',
	to: 'onkarhasabe30@gmail.com',
	subject: 'reguaring assignment status',
	text: `assignment done successfully`
	};

	mailsender.senderFunction(mailOptions);

	res.json(mailOptions);
});

module.exports = router;

