const { Router } = require("express");
const express=require("express");

const JwtMiddleware=require('../middlewares/jwt-middleware')

const router=express.Router();

const controllers=require("../controllers/login");

const controllers2=require("../controllers/validate");

const controllers3=require('../controllers/profile')

router.post("/login",controllers.login);

router.post("/validate",controllers2.validate)

router.put("/edit_profile",JwtMiddleware.checkToken,controllers3.profile)

module.exports=router;