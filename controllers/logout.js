var user_token = require("../models").user_token;

var logout = (req, res) => {
  let userToken = req.headers["authorization"];

  user_token
    .findOne({
      where: {
        token: userToken,
        user_id: req.user.id,
      },
    })
    .then((user) => {
      if (user) {
        user_token.destroy({
          where: {
            id: user.id,
          },
        }).then(()=>{
            res.status(200).json({
                status:1,
                data:{},
                message:"logout successfully"
            })
        })
      } else {
        res.status(200).json({
          status: 0,
          data:{},
          message: "token is not found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  logout,
};
