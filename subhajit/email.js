exports.helpmail=(to1,from1,subject1,text1)=>{

var mailhelper=require('nodemailer');

var  smail=mailhelper.createTransport({
	service:'gmail',
	auth: {
		 user :'subhajit28061997@gmail.com',
		  pass:'taghzwdztpnrmiwa'
	}
});


var  message={
	from:to1,
	to:from1,
	subject: subject1,
  text: text1
}


smail.sendMail(message, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
}



