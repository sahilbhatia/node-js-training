//const express = require('express');
nodeMailer = require('nodemailer');
//Email id and Password of the mail sender !!
const userEmail = process.env.EMAIL;
const pass = process.env.EPASS;
//function to send the email
function emailData(mailObj) {
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      //assigning the email id and password of the sender
        user: userEmail,
        pass: pass
    }
  });

  let mailOptions = {
    //composing a new mail 
    to: mailObj.email,
      subject: 'User has been created',
      text: 'Your account has been created with below details :'+
      '{ name :'+mailObj.name+','+
        'email :'+mailObj.email+','+
        'location :'+mailObj.location+','+
      '}' +
        ' Please set your password'
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