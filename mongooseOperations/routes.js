const express = require('express');
const router = express.Router();
const user = require('./controller');

router.post('/user',user.create);

router.get('/user', user.findAll);

 router.get('/user/:email', user.findOne);
 
 router.put('/user/:oldemail',user.update);
 
 router.delete('/user/:email', user.delete);
 
module.exports = router;



