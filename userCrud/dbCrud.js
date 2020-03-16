
const db=require('./dbConnection');
const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');
router.use(bodyParser.json());

router.post('/add',function(req,res){
 
  db.getmydb().collection("customers").insertOne(req.body, function(err, res) {
      if (err)
      console.log(err);
      else
      console.log(req.body);
    });
});

router.put('/:id',function(req,res){
 
  var id = { name: req.params.id };
  var newvalues = { $set:req.body };
    console.log(id);
  db.getmydb().collection("customers").updateOne(id, newvalues, function(err, res) {
    if (err)
    console.log(err);
    else
    console.log("1 document updated");
  });
});

router.delete('/:id',function(req,res){
   var id = { name: req.params.id };
     console.log(id);
  db.getmydb().collection("customers").deleteOne(id, function(err, res) {
      if (err)
      console.log(err);
      else
      console.log(req.body);
    });
});


module.exports=router;



