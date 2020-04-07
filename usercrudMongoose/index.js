const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
const dbconfig = require('./configuration/dbconfig');
const route = require('./app/routes/userRoutes');
app.use('/', route);
dbconfig.connection;
portNo = process.env.PORTNO;
dbconfig.connect(function (error) {
  if (error) {
    console.log(error);
  }
  else {
    http.createServer(app).listen(portNo, function () {
      console.log(`running on port ${portNo}`);
    })
  }

})
