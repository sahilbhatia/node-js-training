const express = require('express');
nodeMailer = require('nodemailer');

function sendMail(data) {
  let transporter = nodeMailer.createTransport({
    host: 'avimanepatil@gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: data.from,
        pass: 'XXXXX'
    }
  });

  let mailOptions = {
    to: data.to,
      subject: data.subject,
      text: data.text
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error);
  }
  console.log('Message %s sent: %s', info.messageId, info.response);
  });
}
module.exports = {sendMail};


