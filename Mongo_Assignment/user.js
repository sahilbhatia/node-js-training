const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const myDbConnection = require('./mongo_Connection');

//Getting the user details as json body
router.post('/add',function (req,res) {
  //console.log(`${req.body}`);

  //Adding the user details json object into the userdetail table
  myDbConnection.getUser().collection('userdetail').insertOne(req.body, function(err, res) 
  {    
    if (err) 
    { //if inserting data fails
      console.log(err);
    }
    console.log("1 document inserted");
  });
  
  res.json(`json object sended`);
})

module.exports = router;
