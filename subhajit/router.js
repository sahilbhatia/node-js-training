const exp = require('express');

const router = exp.Router();
let mail = require('./email');
router.get('/information/:from/:to/:subject/:text', function (req, res) {
  console.log(req.params.to);
  let obj = {
    from: req.params.from,
    to: req.params.to,
    subject: req.params.subject,
    text: req.params.text

  };

  mail.helpmail(obj);
})
module.exports = router;

