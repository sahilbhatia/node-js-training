var exp = require('express');

var router = exp.Router();
var mail = require('./email');



router.get('/', function (req, res) {
       var from = 'subhajit28061997@gmail.com';
       var to = 'subhajit.nandi@joshsoftware.com';
       var subject = 'mail test';
       var text = 'first mail';
       mail.helpmail(from, to, subject, text);

       res.json({

              'success': 'mail sended'
       })
})
module.exports = router;
