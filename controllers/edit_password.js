var user=require('../models').User_Registration;
var bcrypt = require("bcrypt");

var changePassword=(req,res)=>{


    var id=req.user.id;

    var change_password={
        
        password:bcrypt.hashSync(req.body.new_password,10)
    };

    user.findByPk(id).then((pas)=>{

      if(bcrypt.compareSync(req.body.old_password,pas.password)){

       user.update(change_password,{where:{
           id:id
       }}).then((num)=>{

              if(num==1){


                res.status(200).json({

                    status:1,
                    data:{},
                    message:"password updated successfully"

                })

            }
            else{
                  
                res.status(200).json({
 
                status:0,
                data:{},
                 message:"your old password is incorrect"

                })
            }
        }).catch(err=>{
            console.log(err);
        })


      }

})
} 

module.exports={
    changePassword
}
