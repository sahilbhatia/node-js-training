const mongoose = require('mongoose');
const  db= process.env.db;

const userSchema = mongoose.Schema({
    name : String,
    mobile : Number,
	password : String,
    email : {
      type : String, unique :true
    },
    location : String
}, {
    timestamps: true
});

let databaseconn = mongoose.connection.useDb(db);
module.exports = mongoose.model('User', userSchema,'myuserlist');


