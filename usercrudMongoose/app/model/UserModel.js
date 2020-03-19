const mongoose = require('mongoose');

const User = mongoose.Schema({
    id : Number,
    name: String,
    email: {
        type :String,
        unique:true
    },
    mobileNo : Number

}, {
    timestamps: true
});
///1) modelname, schemaname ,collectionName
module.exports = mongoose.model('Users', User,'userInfo');
