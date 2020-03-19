const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
const dbconfig = require('./configuration/dbconfig');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to database");
}).catch(err => {
  console.log('error in coonection   :', err);
  process.exit();
})
const route = require('./app/routes/userRoutes');
app.use('/main', route);
app.listen(3001, function () {
  console.log("running on port 3001")
})
