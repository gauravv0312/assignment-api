const userModel = require('../model/user');
const CookieToken = require('../utils/cookieToken');
const BigPromise = require('../middleware/bigPromise');

exports.signup=BigPromise(async(req,res,next)=>{
 
   const{name,email,phoneNumber} = req.body;
   if(!email || !name || !phoneNumber){
    return next(new CustomError('Name ,email and phoneNumber are required',400));
};

    const user = await userModel.create({
        name,
        email,
        phoneNumber,
      
    });

   CookieToken(user,res);
});


