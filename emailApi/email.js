
exports.mailSend = (mail_obj)=>{
	const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
	host: 'smtp.gmail.com',
    port: 465,
	service  : 'gmail',
	auth :{
		user : 'jitendrasbunde@gmail.com',
		pass :'gawgialpaiqhongo'
	}
});

transport.sendMail(mail_obj,function (error,info){
	if(error){
		console.log(error);
	}else{
	 console.log('Email Send  '+ info.response);
	}
});
}