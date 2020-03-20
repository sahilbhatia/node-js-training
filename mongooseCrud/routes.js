  const express = require('express');
  const router = express.Router();
  const bodyParser = require('body-parser');
  router.use(bodyParser.json());

  const user = require('./controller.js');


  router.get('/',user.findAll);

  router.post('/add',user.create);

  router.delete('/delete/:email',user.delete)

  router.put('/update/:email',user.update)
/*
// Retrieve all Notes
  // Update a Note with noteId
  router.put('/:email',(req,res)=>{
    user.update(req,res)
  });

  // Delete a Note with noteId
  router.delete('/:email',()=>{
    user.delete(req,res);
  });

*/
module.exports = router;