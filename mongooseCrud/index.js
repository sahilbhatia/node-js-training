const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

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

app.listen(3004, () => {
  console.log("Server is listening on port 3004");
});
