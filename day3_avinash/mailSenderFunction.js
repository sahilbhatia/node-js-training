const nodeMailer =require('nodemailer');
const express=require('express');

    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'avimanepatil@gmail.com',
          pass: '*****'
        }
      });

    function mailSender(data){
      transporter.sendMail(data);

    }

module.exports={
               mailSender
                };

                
