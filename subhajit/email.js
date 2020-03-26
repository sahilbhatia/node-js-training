exports.helpmail = (obj) => {

  const mailhelper = require('nodemailer');

  let smail = mailhelper.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    secure: true,
    auth: {
      user: obj.from,
      pass: 'taghzwdztpnrmiwa'
    }
  });
  let message = {
    to: obj.to,
    subject: obj.subject,
    text: obj.text
  };

  smail.sendMail(message, function (error, info) {
    if (error) {
      console.log(error);
    }
    else {
      console.log('Email sent: ' + info.response);
    }
  });
}



