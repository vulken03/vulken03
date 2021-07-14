const JwtConfig=require('../config/jwt-config');
const jwt=require('jsonwebtoken');
const user_token=require('../models').user_token;

let checkToken=(req,res,next)=>{

let userToken=req.headers["authorization"];

if(userToken){
    jwt.verify(userToken,JwtConfig.secret,{
        algorithm:JwtConfig.algorithm
    },(error,data)=>{
        if(error){
            return res.status(500).json({
                status:0,
                data:error,
                message:'token is not valid'
            })
        }else{
            req.user=data;

            user_token.findOne({
                where:{
                    token:userToken,
                    user_id:req.user.id
                }
            }).then((userverify)=>{

                   if(userverify){

                    next();
                   }
                   else{
                       res.status(200).json({
                        
                        status:0,
                        message:"Invalid token"
                       })
                   }
            })

           
        }
    })
}

else{
    return res.status(500).json({
        status:0,
        message:"please provide authentication token value"
    })

}


}

module.exports={
    checkToken
}