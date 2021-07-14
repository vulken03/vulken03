var db = require("../models/");

var path = require("path");

var bcrypt = require("bcrypt");

const User = db.User;

//const {User_Registrations:User}=require('../models/user_registration');

const fs = require("fs");
const { Sequelize } = require("../models/");

const Op = Sequelize.Op;

var Register = (req, res) => {
  //const{media,type,first_name,last_name,user_name,email,password}=req.body;

  //const newUser=new User({media,type,first_name,last_name,user_name,email,password});

  //await newUser.save().catch(err=>{

  //console.log("err"+err);
  //})

  const register = {
    media: req.file.path,

    type: req.file.mimetype.split("/")[0],

    first_name: req.body.first_name,

    last_name: req.body.last_name,

    user_name: req.body.user_name,

    email: req.body.email,

    password: bcrypt.hashSync(req.body.password, 10),
  };

  User.findOne({
    where: {
      email: {
        [Op.eq]: req.body.email,
      },
    },
  }).then((user) => {
    if (user) {
      res.status(200).json({
        status:0,
        data:{},
        message: "User already exists with this Email",
      });
    } else {
      User.create(register)
        .then((data) => {
          res.status(200).json({
            
            status:1,
            message:"Registered successfully",
            data:data});
          console.log(data);
        })

        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occured while retriving tutorials.",
          });
        });
    }
  });
};

module.exports = {
  Register,
};
