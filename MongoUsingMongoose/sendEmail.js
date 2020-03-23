//const express = require('express');
nodeMailer = require('nodemailer');

//function to send the email
function emailData(mail_Obj) {
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      //assigning the email id and password of the sender
        user: 'vitkarmanish21@gmail.com',
        pass: 'zuykdecyecslslgu'
    }
  });

  let mailOptions = {
    //composing a new mail 
    to: mail_Obj.email,
      subject: 'User has been created',
      text: 'Your account has been created ,Please set your password by visiting to following url URl :http://localhost:8443/user/setpassword'
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