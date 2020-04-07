const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
  id: Number,
  name: String,
  email: {
    type: String,
    unique: true
  },
  mobile: Number,
  password: String
}, {
  timestamps: true
});

let db = process.env.DB;
let databaseConn = mongoose.connection.useDb(db);
//1)param - modelname, 2)param -schemaname ,3)param - collectionName
module.exports = databaseConn.model('User', UserSchema, 'userInfo');
