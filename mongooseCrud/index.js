const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT
// create express app
const app = express();
var http = require('http');
var httpServer = http.createServer(app);


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

const route = require('./routes/routes')
const db = require('./dbConnection/mongooseConnection')

app.use('/',route)
// Connecting to the database
// define a simple route
app.get('/start', (req, res) => {
    res.json({"message": "welcome to my website "});
});
db.connect();
// listen for requests

  httpServer.listen(PORT,function(err)
  {
    if(err) console.log(err);
    console.log(`Server running on port ${PORT}`)
  });
