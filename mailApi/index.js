const express=require('express');
const app=express();
const db=require('./mailRout')

app.use('/sendMail',db);
app.listen(3004);
console.log("server started");


