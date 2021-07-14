const express=require("express");

const router=express.Router();

const register=require("./register")

const login=require('./login')

const createpost=require('./create_post')

const postmedia=require('./create_postmedia')

const editpost=require('./update_post')

const deletepost=require('./delete_post')

const like=require('./like')

const postlist=require('./post_list')

const changepassword=require('./edit_password')

const logout=require('./logout')

const forgetpassword=require('./forgetpassword')

router.use(register);

router.use(login);

router.use(createpost);

router.use(postmedia);

router.use(editpost);

router.use(deletepost);

router.use(like);

router.use(postlist);

router.use(changepassword);

router.use(logout);

router.use(forgetpassword);

module.exports=router;