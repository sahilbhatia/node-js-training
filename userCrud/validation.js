
function isValidEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true);
  }
    return (false);
}

function isValidName(name) 
{
	if (name == "")
	{
		return (false);
	}
	else if (/\s|[0-9]/.test(name))
	{
	return (false);
	}
	 return (true);
}
 function isIdExist(dbo,id,callback)
{  
	dbo.collection('customers').find(id).toArray(function(err,result) {
		if(err)
		console.log(err);
		else if(result==0)
		callback(false);
		else 
		callback(true);
	   }); 
}


module.exports={
	isValidEmail,
	isValidName,
	isIdExist
}

