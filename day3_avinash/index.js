const express=require('express');
const app=express();
const sendmail=require('./send_mail_notification');
app.use('/sendmail',sendmail);

app.listen(3003,function(){
    console.log('server started');
})
