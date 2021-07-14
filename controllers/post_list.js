//var db = require("../models");

var Post = require("../models").post_table;
var User = require("../models").User_Registration;
var PostMedia = require("../models").post_media;
var PostLikes = require("../models").post_likes;

var PostList = async (req, res) => {
  await Post.findAll({
    limit: 10,
    offset: 0,
    attributes: ["description", "total_likes", "createdAt"],

    include: [
      { model: User, attributes: ["media", "type", "user_name"] },

      {
        model: PostMedia,
        attributes: ["url", "type"],
      },

      {
        model: PostLikes,
        attributes: ["createdAt"],
        include: [
          {
            model: User,
            attributes: ["user_name"],
          },
        ],
      },
    ],
  })
    .then((postlist) => {
      res
        .status(200)
        .send({
          message: "Post",
          status: 1,
          data: postlist,
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  PostList,
};
