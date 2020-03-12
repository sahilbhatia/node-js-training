exports.helpmail = (from1, to1, subject1, text1) => {

	var mailhelper = require('nodemailer');

	var smail = mailhelper.createTransport({
		service: 'gmail',
		auth: {
			user: 'subhajit28061997@gmail.com',
			pass: 'taghzwdztpnrmiwa'
		}
	});


	var message = {
		from: from1,
		to: to1,
		subject: subject1,
		text: text1
	}


	smail.sendMail(message, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
}



