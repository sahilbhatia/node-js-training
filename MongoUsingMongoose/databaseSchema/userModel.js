const mongoose = require('mongoose');
const dbName = process.env.DBNAME;

const userSchema = mongoose.Schema({
    id : Number,
    name : String,
    email : {
      type : String, unique :true
    },
    location : String,
    password : String
}, {
    timestamps: true
});
//Connecting to the required database !!
let databaseConn = mongoose.connection.useDb(dbName);  
//1)param - modelname, 2)param -schemaname ,3)param - collectionName
module.exports = databaseConn.model('User', userSchema,'userlist');
