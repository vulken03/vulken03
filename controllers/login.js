var db = require("../models/");

var bcrypt = require("bcrypt");

var jwt = require("jsonwebtoken");

var JwtConfig = require("../config/jwt-config");
const { use } = require("../router");

var User = db.User;

var user_token = db.UserToken;

var login = async (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let userToken = jwt.sign(
            {
              email: user.email,
              id: user.id,
            },
            JwtConfig.secret,
            {
              //expiresIn: JwtConfig.expiresIn,
              //notBefore: JwtConfig.notBefore,
              audience: JwtConfig.audience,
              issuer: JwtConfig.issuer,
              algorithm: JwtConfig.algorithm,
            }
          );

          res.status(200).json({
            status: 1,
            message: "User logged",
            data: {
             user_information:user,
             token:userToken},
          });

          user_token.create({
            user_id: user.id,
            token: userToken,
          }); //show all user data and append token in data
        } else {
          res.status(200).json({
            status:0,
            data:{},
            message: "email or password didn't match",
          });
        }
      } else {
        res.status(200).json({
          status: 0,
          data:{},
          message: "User dosen't exist with this email address",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { login };
