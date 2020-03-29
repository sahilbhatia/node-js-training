exports.helpmail = (to) => {

  const mailhelper = require('nodemailer');

  let smail = mailhelper.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    secure: true,
    auth: {
      user: 'subhajit28061997@gmail.com',
      pass: 'taghzwdztpnrmiwa'
    }
  });
  let message = {
    to: to,
    subject: "email registered",
    text: "You email has been registered"
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
