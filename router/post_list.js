const express=require("express");
const JwtMiddleware=require('../middlewares/jwt-middleware')
const router=express.Router();
const controllers=require("../controllers/post_list")

router.get("/postlist",JwtMiddleware.checkToken,controllers.PostList);

module.exports=router;