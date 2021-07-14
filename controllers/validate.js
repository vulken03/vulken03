var jwt=require("jsonwebtoken");

var JwtConfig=require("../config/jwt-config");

var validate=(req,res)=>{

let userToken=req.headers["authorization"]

if(userToken){

jwt.verify(userToken,JwtConfig.secret,(error,decoded)=>{

if(error){
    console.log(error);
}else{
    res.status(200).json({
        status:1,
        message:"Token is valid"
    })
}

})

}else{

    res.status(500).json({
 
        status:0,
        message:"Please provide authentication token value"

    })
}


}
module.exports={
    validate
};