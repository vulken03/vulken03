const express=require('express');
//const JwtMiddleware=require('../middlewares/jwt-middleware');
const router=express.Router();
const controllers=require("../controllers/forget_password")

router.post('/forget_password',controllers.forgetpassword);

router.get('/reset/:id',controllers.reset);

router.post('/reset',controllers.reset);

module.exports=router;