const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let username = process.env.username;
let password = process.env.password;
let db = process.env.db;
let connection = mongoose.connect(`mongodb://localhost:27017/${db}?authSource=admin`, {
  user: username,
  pass: password,
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to database");
}).catch(err => {
  console.log('error in coonection   :', err);
  process.exit();
})
module.exports = {
  connection
}
