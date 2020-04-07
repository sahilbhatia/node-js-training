const express=require ('express');
const router=express.Router();
const controller=require('./controller');
router.post('/user',controller.create);
router.get('/users',controller.findAll);
router.get('/user/:email',controller.findOne);
router.put('/user/:email',controller.update);
router.delete('/user/:email',controller.delete);
module.exports=router;
