const Pool=require('pg').Pool;
userPg=process.env.USER;
hostname=process.env.HOST;
db=process.env.DB;
pass=process.env.PASSWORD;
portno=process.env.PORTNO;

const pool=new Pool({
	user:userPg,
	host:hostname,
	database:db,
	password:pass,
	port:portno
})
module.exports=pool;
