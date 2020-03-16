nodeMailer = require('nodemailer');

//function to send the email
function emailData(mailObj) {
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      //assigning the email id and password of the sender
        user: mailObj.from,
        pass: 'zuykdecyecslslgu'
    }
  });

  let mailOptions = {
    //composing a new mail 
    to: mailObj.to,
      subject: mailObj.subject,
      text: mailObj.text
  };
  
  //sending the mail and getting acknowlegment !!
  transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error);
  }
  console.log('Message %s sent: %s', info.messageId, info.response);
  });
}
module.exports = {emailData};
