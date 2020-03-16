 
const express = require('express');
const router = express.Router();
nodeMailer = require('nodemailer');
const sendEmail = require('./sendMail');

router.get('/mail/from:from/to/:to/text/:text',function(req,res,next)
{
  console.log(`${req.params}`);

  var data = {
    from : req.params.from,
    to : req.params.to,
    text : req.params.text
  }
  sendEmail.sendMail(data);
  res.json("path parameter");
})

router.get('/mail/:from-:to-:text',function(req,res,next)
{
  console.log(req.query);
  var data = {
    from : req.query.from,
    to : req.query.to,
    subject : req.query.subject,
    text : req.query.text
  }
  sendEmail.sendMail(data);
  res.json("request parameter");
})

module.exports = router;


