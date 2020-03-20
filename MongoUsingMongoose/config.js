const url = process.env.URL;
const port = process.env.PORT;
const dbName = process.env.NAME;
const user = process.env.USER;
const password = process.env.PASSWORD;
const mongoose = require('mongoose');
let urlmapping = `mongodb://${user}:${password}@${url}:${port}/${dbName}?authSource=admin`

function connect ()
{
  mongoose.Promise = global.Promise;
  // Connecting to the database
  mongoose.connect(urlmapping, {
      useNewUrlParser: true
  }).then(() => {
      console.log("Successfully connected to the database");    
  }).catch(err => {
      console.log('Could not connect to the database. Exiting now...', err);
      process.exit();
  });
}
module.exports = {connect};
