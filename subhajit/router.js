const exp = require('express');

const router = exp.Router();
var mail = require('./email');
router.get('/', function (req, res) {
  var obj = {
    from: 'subhajit28061997@gmail.com',
    to: 'subhajit.nandi@joshsoftware.com',
    subject: 'mail test',
    text: 'first mail'

  };

  mail.helpmail(obj);
})
module.exports = router;
