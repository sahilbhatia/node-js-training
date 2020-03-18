const valid=require('./validation');
const db=require('./dbConnection');
const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');
router.use(bodyParser.json());

//add user
router.post('/',function(req,res){
   let mailValidation=valid.isValidEmail(req.body.email);
   let nameValidation=valid.isValidName(req.body.name);
   let id = { email: req.params.id };
   if(mailValidation && nameValidation ){
    valid.isIdExist(db.getmydb(),id,function(status){
    if(!status){
      db.getmydb().collection("customers").insertOne(req.body, function(err, result) {
        if (err)
        console.log(err);
        else
        res.json(result);
      });
     } 
     else
      res.status(409).json("email allredy exist!!!");
   });
  }
  else{
    if(!mailValidation)
			res.status(400).json("not a valid email");
		else if(!nameValidation)
			res.status(400).json("name should only contain characters");
		else
			res.status(400).json("something went wrong");
  }

  
});

//update user by id
router.put('/:id',function(req,res){
  let mailValidation=valid.isValidEmail(req.params.id);
  let nameValidation=valid.isValidName(req.body.name);
  if(mailValidation && nameValidation)
  {
        let id = { email: req.params.id };
        let newvalues = { $set:{email:req.body.email,name:req.body.name}};
        valid.isIdExist(db.getmydb(),id,function(status){
          if(status){ 
          db.getmydb().collection("customers").updateOne(id, newvalues, function(err, result) {
          if (err)
          console.log(err);
          else
          console.log("1 document updated");
          });
         }
        else
          res.status(409).json("mail not exist");
        });
  }
  else{
    if(!mailValidation)
			res.status(400).json("not a valid email");
		else if(!nameValidation)
			res.status(400).json("name should only contain characters");
		else
			res.status(400).json("something went wrong");
  }
  
});

//delete user by id
router.delete('/:id',function(req,res){
   let id = { email: req.params.id };
    
     valid.isIdExist(db.getmydb(),id,function(status){
       if(status){
       db.getmydb().collection("customers").deleteOne(id, function(err, result) {
      if (err)
      console.log(err);
      else
      res.json(result);
      });
      }
      else
      {res.status(409).json("email not exist!!!"); }
  });
});


//show all user
 router.get('/',function(req,res) { 
    db.getmydb().collection('customers').find().toArray(function(err,result) {
    if(err) 
    console.log(err)
    console.log(result); 
    res.json(result);
    }); 
 })


//find user by  id 
  router.get('/:id',function(req,res) {
     let id= {email : req.params.id};
      db.getmydb().collection('customers').find(id).toArray(function(err,result) {
      if(err) 
       console.log(err);
       else{
         if(result)
         res.json(result); 
         else
         res.status(409).json("email not exist!!!"); 
       }
     });    
})

module.exports=router;






