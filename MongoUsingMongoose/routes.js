const express = require('express');
const router = express.Router();
const user = require('./controller');
//Add user in the Database
router.post('/user',user.create);

 // Retrieve all user
 router.get('/user', user.findAll);

 // Retrieve a single User with serEmail
 router.get('/user/:email', user.findOne);

 // Update a user with userEmail
 router.put('/user/:email', user.update);

 // Delete a user with userEmail
 router.delete('/user/:email', user.delete);

module.exports = router;
