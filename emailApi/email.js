
exports.mailSend = ()=>{
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

const mailInfo = {
	from :'jitendrasbunde@gmail.com',
	to:'sunil.sonawane@joshsoftware.com,jitendrasbunde@gmail.com',
	subject:'Email API test',
	text : 'Node Mail API Testing mail By Jitendra'
};
transport.sendMail(mailInfo,function (error,info){
	if(error){
		console.log(error);
	}else{
	 console.log('Email Send  '+ info.response);
	}
});
}