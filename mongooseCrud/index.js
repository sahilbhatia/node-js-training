const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
var http = require('http');
var httpServer = http.createServer(app);


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

const route = require('/home/jitendra/Node-Js_Training/git_training/node-js-training/mongooseCrud/routes/routes')
const loginRoute = require('/home/jitendra/Node-Js_Training/git_training/node-js-training/mongooseCrud/routes/loginrouter')
const db = require('/home/jitendra/Node-Js_Training/git_training/node-js-training/mongooseCrud/dbConnection/mongooseConnection')

app.use('/user',route)
app.use('/account',loginRoute)
// Connecting to the database

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
db.connect();
// listen for requests

  httpServer.listen(3004,function(err)
  {
    if(err) console.log(err);
    console.log("Server running on port 3004")
  });
