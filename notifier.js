var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anu.lazy123@gmail.com',
    pass: '<>'
  }
});

var mailOptions = {
  from: 'anu.lazy123@gmail.com',
  to: 'anu.lazy123@gmail.com',
  cc: 'anuja.joshi@joshsoftware.com',
  subject: 'Sending Email using Node.js',
  text: 'Thanks for the training!'
};

;

var methods = {
    sendEmail:  function(res) {
                  transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      res.json({"status": "errored", "error": error})
                    } else {
                      res.json({"status": "success"})
                    }
                  })
                }
}

module.exports = methods;
