const express = require('express');
const router = express.Router();
nodeMailer = require('nodemailer');
var sendemail = require('./send_email');

router.get('/',function(req,res,next)
{
  console.log("inside get request of email file");
  next();
})
router.use(email_sender);

function email_sender(req,res) {
  var mail_obj = {
    from :'vitkarmanish21@gmail.com',
    to :'onkarhasabe1@gmail.com,sunil.sonawane@joshsoftware.com,',
    subject: 'Hello test mail',
    text: 'please reply if you get the mail'

  }
  sendemail.emailData(mail_obj);
  res.json("email send succesfully");
  

}

module.exports = router;