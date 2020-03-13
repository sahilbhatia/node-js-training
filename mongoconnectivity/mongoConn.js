const express = require('express');
const app = express;
const file = require('./userRouter.js');
const mongo = require('mongodb'); 

const mongoClient = require('mongodb').MongoClient;
const mongoDbUrl = 'mongodb://127.0.0.1:27017';
let mongodb;

function connect(callback){
    mongoClient.connect(mongoDbUrl, (err, db) => {
        mongodb = db.db('onkar');
        callback();
    });
}
function get(){
    return mongodb;
}

function clcose(){
   return mongodb.close();
}

module.exports = {
    connect,
    get,
    clcose
};