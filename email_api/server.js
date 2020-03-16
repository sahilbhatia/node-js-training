const express = require('express');
const app = express();

//getting the reference on the email.js file
const emailObj = require('./email');
app.use('/email',emailObj);

//serverUp at port 3003 
app.listen(3003,function(req,res)
{console.log("server is running on 3003");})
