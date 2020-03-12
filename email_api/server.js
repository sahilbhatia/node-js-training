const express = require('express');
const app = express();

var emailobj = require('./email');
app.use('/email',emailobj);
app.listen(3003,function(req,res)
{console.log("server is running on 3003");})