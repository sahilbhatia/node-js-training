const exp=require('express');
function mongoclient()
{
    const mongoClient = require('mongodb').MongoClient;
    return mongoClient;
}

function geturl()
{
const mongoDbUrl = 'mongodb://127.0.0.1:27017';
return mongoDbUrl;
}

module.exports={
    mongoclient,
    geturl
}