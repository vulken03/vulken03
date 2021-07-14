const express=require("express");
const JwtMiddleware=require('../middlewares/jwt-middleware')
const router=express.Router();
const controller=require('../controllers/like')

router.post("/like/:post_id/",JwtMiddleware.checkToken,controller.likes);

module.exports=router;