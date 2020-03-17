const routingFile = require('./userRouter.js');
const mongo = require('mongodb'); 
const configFile= require('./config');

let mongodb;

function connect(callback){
    configFile.client().connect(configFile.dbUrl(), (err, db) => {
		if (err) {
               console.error('An error occurred connecting to MongoDB: ', err);
           } else {
		
        mongodb = db.db('onkarauth');
        callback();
		   }
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

