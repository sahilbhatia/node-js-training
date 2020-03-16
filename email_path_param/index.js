const express=require('express');
const app=express();
const mailRout=require('./mailRout')

app.use('/sendMail',mailRout);
app.listen(3000);
console.log("server started at 3000 port");
