var User = require("../models").User_Registration;
var UserToken = require("../models").user_token;
var nodemailer = require("nodemailer");
var bcrypt = require("bcrypt");
//var sendgridTransport=require('nodemailer-sendgrid-transport');
//var crypto=require('crypto');
//var transporter=nodemailer.createTransport(sendgridTransport({
//  auth:{
//      api_key:"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"
//}
//}))

var forgetpassword = (req, res) => {
  /* crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err);
        }
    
        const token=buffer.toString("hex")*/

  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (user) {
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "socialmediaapi140@gmail.com",
            pass: "Geforcegtx1080ti",
          },
        });

        var mailOptions = {
          from: "socialmediaapi140@gmail.com",
          to: user.email,
          subject: "Change your password",
          html: `
               <p>change your password</p>
               <a href="http://localhost:8080/api/v1/reset/${user.id}">resetpasswordlink</a>
          `,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
            res.status(200).json({
              message: "mail sent successfully",
              data: {},
              status: 1,
            });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({
        status: 0,
        message: "Mail is not send",
        data: {},
      });
    });
};

var reset = (req, res) => {
  res.render("email");

  User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((user) => {
    if (req.body.pass1 == req.body.pass2) {
      var password = bcrypt.hashSync(req.body.pass1, 12);

      User.update(password, {
        where: {
          id: user.id,
        },
      });
      res.status(200).send({
        status: 1,
        data: {},
        message: "password reset successfully",
      });
    } else {
      res.status(200).send({
        status: 0,
        data: {},
        message: "password is not changed",
      });
    }
  });
};

module.exports = {
  forgetpassword,
  reset,
};
