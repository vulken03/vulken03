const express=require("express");
const JwtMiddleware=require('../middlewares/jwt-middleware')
const router=express.Router();
const controllers=require('../controllers/delete_post')

router.delete("/delete_post/:id",JwtMiddleware.checkToken,controllers.delete_post);

module.exports=router;