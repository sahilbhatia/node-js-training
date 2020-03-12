
exports.mailSend = (eFrom,eTo,eSubject,eText)=>{
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
	from :eFrom,
	to:eTo,
	subject:eSubject,
	text : eText
};
transport.sendMail(mailInfo,function (error,info){
	if(error){
		console.log(error);
	}else{
	 console.log('Email Send  '+ info.response);
	}
});
}