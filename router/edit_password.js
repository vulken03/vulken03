const express=require('express');
const JwtMiddleware=require('../middlewares/jwt-middleware');
const router=express.Router();
const controllers=require("../controllers/edit_password")

router.put("/change_password",JwtMiddleware.checkToken,controllers.changePassword);

module.exports=router;