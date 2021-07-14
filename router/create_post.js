const { Router } = require("express");
const express=require("express");

const JwtMiddleware=require('../middlewares/jwt-middleware')

const upload = require('../config/post.config.js');

const router=express.Router();

const controllers=require('../controllers/create_post')

router.post("/Post",[JwtMiddleware.checkToken,upload.array('photos',12)],controllers.create_post);

module.exports=router;