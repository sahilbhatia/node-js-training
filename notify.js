var express = require('express')
var router = express.Router()


var notifier = require('./notifier.js');


router.get('/', function (req, res) {
  notifier.sendEmail(res)
});


module.exports = router
