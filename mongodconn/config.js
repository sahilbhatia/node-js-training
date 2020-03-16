const express= require('express');

function client(){
const mongoClient = require('mongodb').MongoClient;
return mongoClient;
}

function dbUrl(){
const mongoDbUrl = 'mongodb://onkar:onkar@127.0.0.1:27017';
return mongoDbUrl;
}

module.exports={
	client,
	dbUrl	
}

