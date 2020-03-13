const express=require('express');
const app=express();
const db=require('./dbCrud')
const dbcon=require('./dbConnection');

app.use('/user/add',db);

dbcon.getConnection(function(err){
if (err)
{
    console.log(err);
}
app.listen(3004);
console.log("server started");
});