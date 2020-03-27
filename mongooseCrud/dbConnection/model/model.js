
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String,unique : true, required : true},
    email: { type: String,unique : true, required : true},
    adharNo:{ type: Number,unique : true, required : true},
    panNo:{ type: String,unique : true, required : true},
    mobileNo:{ type: Number,unique : true, required : true},
    password:{type:String}
}, {
    timestamps: true
});
/*
const userSchema = mongoose.Schema({
    name: { type: String, required : true},
    email: { type: String, required : true},
    adharNo:{ type: Number, required : true},
    panNo:{ type: String, required : true},
    mobileNo:{ type: Number, required : true},
    password:{type:String}
}, {
    timestamps: true
});
*/
module.exports = mongoose.model('User', userSchema,'user');

