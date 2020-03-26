const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : String,
    mobile : Number,
    email : {
      type : String, unique :true
    },
    location : String
}, {
    timestamps: true
});
module.exports = mongoose.model('User', userSchema,'myuserlist');


