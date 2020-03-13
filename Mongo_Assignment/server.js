const express = require('express');
const myRoute = require('./user');
const app = express();


const mydbConnection = require('./mongo_Connection');
app.use('/user',myRoute);

//Established the connection with the mongoDb server
mydbConnection.connect(function(err) 
{
  if(err)
  {console.log(err);}
//server start with 3004 port
  app.listen(3004, function (){
    console.log("server running on port 3004");
  });
});

