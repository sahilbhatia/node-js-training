const express = require('express');
nodeMailer = require('nodemailer');


function emailData(mail_obj) {

  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
       
        user: mail_obj.from,
        pass: 'xlomjbethqbpzktr'
    }
  });

  let mailOptions = {
    to: mail_obj.to,
      subject: mail_obj.subject,
      text: mail_obj.text
  };

  transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error);
  }
  console.log('Message %s sent: %s', info.messageId, info.response);
  
  });
}
module.exports = {emailData};