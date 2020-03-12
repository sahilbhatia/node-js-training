const express = require('express');
const router = express.Router();
nodeMailer = require('nodemailer');
var sendEmail = require('./send_email');

router.get('/',function(req,res,next)
{
  console.log("inside get request of email file");
  next();
})

router.use(email_Sender);

function email_Sender(req,res) {

  //json object consisting of the email credentials
  var mail_Obj = {
    from :'vitkarmanish21@gmail.com',
    to :'onkarhasabe1@gmail.com',
    subject: 'Hello test mail',
    text: 'please reply if you get the mail'

  }
  //sending the json object to the function which send the mail !!
  sendEmail.emailData(mail_Obj);
  res.json("email send succesfully");
}

module.exports = router;
