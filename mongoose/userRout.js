const express = require('express');
const router = express.Router();
const user = require('./controller');

router.post('/',user.create);

 router.get('/', user.getAll);

 router.get('/:email', user.findOne);

 router.put('/:email', user.update);

 router.delete('/:email', user.delete);

module.exports = router;


