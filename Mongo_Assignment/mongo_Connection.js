const mongoConnnection = require('./connection_Config');

//sending the reference of the mongoDb connection
function connect(callback){
    mongoConnnection.connect(); //getting connection to mongodb from connection_config file
    callback();
}

function getUser(){
    return mongoConnnection.connectToDb("user");  //sending the reference of the database you created !!
}

module.exports = {
    connect,
    getUser
};
 
