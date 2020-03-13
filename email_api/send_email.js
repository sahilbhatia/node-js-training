const express = require('express');
nodeMailer = require('nodemailer');

//function to send the email
function emailData(mail_Obj) {

  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      //assigning the email id and password of the sender
        user: mail_Obj.from,
        pass: '*****************'
    }
  });

  let mailOptions = {
    //composing a new mail 
    to: mail_Obj.to,
      subject: mail_Obj.subject,
      text: mail_Obj.text
  };
  
  //sending the mail and getting acknowlegment !!
  transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error);
  }
  console.log('Message %s sent: %s', info.messageId, info.response);
  
  });
}
module.exports = {emailData};
