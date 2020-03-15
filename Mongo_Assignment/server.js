const express = require('express');
const myRoute = require('./user');
const app = express();

const port = process.env.NODE_ENV

const mydbConnection = require('./mongo_Connection');
app.use('/user',myRoute);

//Established the connection with the mongoDb server
mydbConnection.connect(function(err) 
{
  if(err)
  {console.log(err);}
//server start with 3004 port
  console.log(`you have entered port no as ${port}`);
  app.listen(port, function (){
    console.log("server running on port 3004");
  });
});

