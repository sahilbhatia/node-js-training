 
const express = require('express');
const router = express.Router();
nodeMailer = require('nodemailer');
const sendEmail = require('./sendMail');

router.get('/email/from:from/to/:to/text/:text',function(req,res,next)
{
  var data = {
    from : req.params.from,
    to : req.params.to,
    text : req.params.text
  }
  sendEmail.sendMail(data);
  res.json('mail send');
})

router.get('/email/:from-:to-:text',function(req,res,next)
{
  var data = {
    from : req.query.from,
    to : req.query.to,
    subject : req.query.subject,
    text : req.query.text
  }
  sendEmail.sendMail(data);
  res.json('mail send');
})

module.exports = router;