const configuration =require('./config');
const create=(req,res)=>{
name=req.body.name;
email=req.body.email;
configuration.query('Insert into userDetails (name,email) values ($1 , $2)',[name,email],(err,result)=>{
if(err){
throw err;
}

res.send(`User created  with email :${email} `);
})
}


const getUsers=(req,res)=>{

configuration.query('Select * from userDetails ',(err,results)=>{
if(err){
throw err;
}
res.json(results.rows);
})

}

module.exports={
    create,
    getUsers
};
