var nodemailer = require('nodemailer');
var info=require('./mail_sender_function');
const express=require('express');
var router=express.Router();


var data={ from: 'avimanepatil@gmail.com',
to: 'avinash.mane@joshsoftware.com,sunil.sonawane@joshsoftware.com',
subject: 'assignment  send mail',
text: `hi i am avinash`};


router.get('/',function(req,res){
          info.mailSender(data,(error,info)=>{
            if(error)
            res.json(error)
            else
            res.json("mail send succesfully");
             });
          
          console.log("Done")
});

module.exports=router;
