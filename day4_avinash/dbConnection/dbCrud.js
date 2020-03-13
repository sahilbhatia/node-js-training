
const db=require('./dbConnection');
const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');
router.use(bodyParser.json());

router.post('/',function(req,res){
    
    db.addData(db.getmydb(),req.body)
});

module.exports=router;