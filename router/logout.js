const express=require('express');
const JwtMiddleware=require('../middlewares/jwt-middleware');
const router=express.Router();
const controllers=require('../controllers/logout');

router.post('/logout',JwtMiddleware.checkToken,controllers.logout)

module.exports=router;

