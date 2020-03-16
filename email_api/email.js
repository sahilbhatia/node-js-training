const express = require('express');
const router = express.Router();
nodeMailer = require('nodemailer');
const sendEmail = require('./send_email');

//Sending email using path parameters !!!
//http://localhost:3003/email/credentials/vitkarmanish21@gmail.com/vitkarmanish21@gmail.com/Testing%20api/Did%20you%20receive%20email
router.get('/sendnotification/:from/:to/:subject/:text',function(req,res,next)
{
  console.log(`${req.params}`);
 // console.log(`${req.params.from}`);

  var mailObj = {
    from : req.params.from,
    to : req.params.to,
    subject : req.params.subject,
    text : req.params.text
  }
  sendEmail.emailData(mailObj);
  res.json("mail has been sended via path parameter");
})

//sending mail through request parameters!!!
router.get('/sendnotification',function(req,res,next)
{
  console.log(req.query);
  var mailObj = {
    from : req.query.from,
    to : req.query.to,
    subject : req.query.subject,
    text : req.query.text
  }
  sendEmail.emailData(mailObj);
  res.json("mail has been sended via request parameter");
})

module.exports = router;
