class UserDetails
{
	
	 constructor(email, name,mobileNo) { 
      this.email = email; 
      this.name = name; 
	  this.mobileNo = mobileNo; 
   } 
   
   getUserEmail(){
	   return this.email;
   }
   
    getUserName(){
	   return this.name;
   }
   
    getUserMobileNo(){
	   return this.MobileNo;
   }
   
   setUserEmail(email){
	   this.email= email;
   }
   
   setUserName(name){
	   this.name= name;
   }
   
   setUserMobileNo(mobileNo){
	   this.mobileNo= mobileNo;
   }
   
}
module.exports = {
	UserDetails
}
