var express = require('express')
var router = express.Router()


var another = require('./notifier.js');


router.get('/', function (req, res) {
  another.data.sendEmail(res)
});


module.exports = router
