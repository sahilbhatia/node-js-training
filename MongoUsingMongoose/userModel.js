const mongoose = require('mongoose');

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
//1)param - modelname, 2)param -schemaname ,3)param - collectionName
module.exports = mongoose.model('User', userSchema,'userlist');
