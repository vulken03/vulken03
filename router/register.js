const express=require("express");

const router=express.Router();

const upload = require('../config/upload.config.js');

const controller=require("../controllers")

router.post("/register",upload.single("register"),controller.Register);



module.exports=router;