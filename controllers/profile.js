var db = require("../models/");

var path = require("path");

var bcrypt = require("bcrypt");

const User = db.User;

var profile = (req, res) => {
  var update_profile = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_name: req.body.user_name,
    email: req.body.email,
  };

  var profile_id = req.user.id;

  User.findByPk(profile_id).then((user) => {
    if (user) {
      User.update(update_profile, {
        where: {
          id: profile_id,
        },
      })
        .then((num) => {
          if (num == 1) {
            res.status(200).json({
              status:1,
              data:{},
              message:"Profile updated successfully"});
          } else {
            res.status(200).json({
              status:0,
              data:{},
              message:"Profile is not updated"});
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  });
};

module.exports = {
  profile
};
