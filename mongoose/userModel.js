const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id : Number,
    name : String,
    email : {
      type : String, unique :true
    },
    location : String
}, {
    timestamps: true
});
//( modelname,schemaname,collectionName)
module.exports = mongoose.model('User', userSchema,'userlist');

