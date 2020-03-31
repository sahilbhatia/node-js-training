const jwt = require('jsonwebtoken');
jwtAuth = (req, res) => {

  const user = req.body;
  console.log(user);
  jwt.sign(user, 'secretKey', { expiresIn: 1500 }, (err, token) => {
    res.json({
      token
    });
  })
}

verification = (req, res, next) => {
  const token = req.body.token;
  if (typeof token !== 'undefined') {
    next();
  }
  else {
    res.status(403).send({ error: "No token given" });
  }
}

checkToken = (req, res, next) => {
  jwt.verify(req.body.token, 'secretKey', (err, Data) => {
    if (err)
      res.status(403).send({
        msg: "forbidden due to wrong token or expired"
      });
    else {
      next();
    }
  })
}

module.exports = {
  jwtAuth,
  verification,
  checkToken
}