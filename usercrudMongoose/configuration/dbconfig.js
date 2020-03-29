
const url = process.env.URL;
const port = process.env.MONGOPORT;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let urlmapping = `mongodb://${url}:${port}`

function connect(callback) {
  // Connecting to the database
  mongoose.connect(urlmapping, {
    useNewUrlParser: true
  }).then(() => {
    console.log("Successfully connected to the database");
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });
  callback();
}
module.exports = { connect };