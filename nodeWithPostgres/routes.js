const express=require ('express');
const router=express.Router();
const controller=require('./controller');
router.post('/user',controller.create);
router.get('/users',controller.getUsers);
module.exports=router;
