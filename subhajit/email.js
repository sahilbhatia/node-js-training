exports.helpmail = (obj) => {

  const mailhelper = require('nodemailer');

  var smail = mailhelper.createTransport({
    host:'smtp.gmail.com',
    port : 465,
    service: 'gmail',
    secure:true,
    auth: {
      user: obj.from,
      pass: 'taghzwdztpnrmiwa'
    }
  });

  var message = {
    to: obj.to,
    subject: obj.subject,
    text: obj.text
  }

  smail.sendMail(message, function (error, info) {
    if (error) {
      console.log(error);
    }
    else {
      console.log('Email sent: ' + info.response);
    }
  });
}



