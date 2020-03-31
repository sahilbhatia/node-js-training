const jwt = require('jsonwebtoken');
  function createToken(emailid)
  {
    const useremail = {email : emailid};
    let token = jwt.sign(useremail,process.env.SECRETTOKEN,{expiresIn : process.env.TOKENEXPIRYTIME}); 
    return token;
  }
  
  function validateToken (req,res,next) 
  {
    const authHeader = req.headers['authorization'];
    const token =authHeader && authHeader.split(' ')[1];
    if(token == null) return res.status(401).send({
        message : "Token not provided"
    });
    jwt.verify(token,process.env.SECRETTOKEN,(err,user) =>
    {
        if(err) return res.status(403).send({
            message: "Not a valid token" 
        });
        req.user =user;
        next();
    })
  }
module.exports = {createToken,validateToken};