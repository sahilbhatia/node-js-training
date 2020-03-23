const express = require('express');
const router = express.Router();
const user = require('./controller');

router.post('/',user.create);

 router.put('/:email', user.update);

 router.post('/login',user.login);
module.exports = router;

