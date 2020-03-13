
exports.mailSend = (mailObj)=>{
	const nodemailer = require('nodemailer');
	const transport = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		service  : 'gmail',
		auth :{
			user :'jitendrasbunde@gmail.com',
			pass :'gawgialpaiqhongo'
		}
});

transport.sendMail(mailObj,function (error,info){
		if(error){
			console.log(error);
		}else{
		console.log('Email Send  '+ info.response);
		}
	}
);
}