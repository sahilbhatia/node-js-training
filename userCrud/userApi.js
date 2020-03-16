const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const db = require('./dbConnect');


router.post('/add',function (req,res) {
  console.log(req.body);

  db.get().collection('user').insertOne(req.body, function(err, res) 
  {    
    if (err) 
    { //if inserting data fails
      console.log(err);
    }
    console.log("1 document inserted");

  });

  res.json({'url':'`json object sended`'});
});

module.exports = router;