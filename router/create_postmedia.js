const { Router } = require("express");
const express=require("express");

const JwtMiddleware=require('../middlewares/jwt-middleware')

const upload = require('../config/post.config.js');

const router=express.Router();

const controllers=require('../controllers/create_postmedia')

router.post("/postmedia/:id",[JwtMiddleware.checkToken,upload.array('photos',12)],controllers.postmedia);

module.exports=router;

