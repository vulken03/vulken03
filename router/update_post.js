const express=require("express");
const JwtMiddleware=require('../middlewares/jwt-middleware')
const router=express.Router();

const controllers=require('../controllers/edit_post');

router.put("/update_post/:id",JwtMiddleware.checkToken,controllers.update);

module.exports=router;
