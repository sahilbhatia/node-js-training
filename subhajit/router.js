const exp = require('express');

const router = exp.Router();
var mail = require('./email');
router.get('/information/:from/:to/:subject/:text', function (req, res) {
  console.log(`{req.params}`);
  var obj = {

    from: req.params.from,
    to: req.param.to,
    subject: req.param.sub,
    text: req.param.text

  };

  mail.helpmail(obj);
})
module.exports = router;
