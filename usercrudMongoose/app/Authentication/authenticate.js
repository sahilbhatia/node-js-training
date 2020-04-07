
const jwt = require('jsonwebtoken');
tokentime = process.env.TOKENTIME
key = process.env.KEY;
jwtAuth = (req, res) => {
  const user = req.body;

  jwt.sign({ user }, key, { expiresIn: tokentime }, (err, token) => {
    console.log
    if (err) {
      console.log(err);
      res.status(403).send({ error: "Error in generating token" });
    }
    else {
      res.send(
        token
      );
    }
  })
}

verification = (req, res, next) => {
  const header = req.headers['authorization'];
  if (typeof header !== 'undefined') {

    const bearer = header.split(' ');
    const token = bearer[1];

    req.token = token;
    next();
  }
  else {

    res.status(403).send({ error: "No token given" });
  }
}

checkToken = (req, res, next) => {

  jwt.verify(req.token, key, (err, authorizedData) => {
    if (err) {
      console.log(err);
      res.status(403).send({
        msg: "forbidden due to wrong token or expired"
      });
    }
    else {
      console.log('SUCCESS: Connected to protected route');
      next();
    }

  });

}

module.exports = {
  jwtAuth,
  verification,
  checkToken
}