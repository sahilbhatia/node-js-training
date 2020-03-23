
nodeMailer = require('nodemailer');

function sendMail(data) {
  let transporter = nodeMailer.createTransport({
    host: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: 'avimanepatil@gmail.com',
        pass: 'avi@4630'
    }
  });

  let mailOptions = {
    to: data.to,
      subject: "account activated",
      text: data.text
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error);
  }
  console.log('Message %s sent: %s', info.messageId, info.response);
  });
}
module.exports = {sendMail};


