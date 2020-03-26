 
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : String,
    email : {
      type : String, unique :true
    },
    pass : String
}, {
    timestamps: true
});
//( modelname,schemaname,collectionName)
module.exports = mongoose.model('User', userSchema,'userlist');
