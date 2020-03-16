exports.helpmail = (obj) => {

  const mailhelper = require('nodemailer');

  var smail = mailhelper.createTransport({
    service: 'gmail',
    auth: {
      user: 'subhajit28061997@gmail.com',
      pass: 'taghzwdztpnrmiwa'
    }
  });

  var message = {
    from: obj.from,
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



