var db = require("../models/");
var Post = db.UserPost;
var Post_Like = db.UserLike;

var likes = (req, res) => {
  var post_id = req.params.post_id;
  var user_id = req.user.id;

  Post_Like.findOne({
    where: {
      user_id: user_id,
      post_id: post_id,
    },
  }).then((postlike) => {
    if (!postlike) {
      Post.findOne({
        where: {
          id: post_id,
        },
      })
        .then((post) => {
          if (post) {
            Post.increment(
              { total_likes: +1 },
              {
                where: {
                  id: post_id,
                },
              });
          }
        })
        .then(() => {
          Post_Like.create({
            post_id: post_id,
            user_id: user_id,
          });
        })
        .then(() => {
          res.status(200).json({
            status:1,
            data:{},
            message: "Liked successfully",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
        //res.status(200).json({ 
        //status:0,
        //message: "Already liked" });
      //unlike
      Post.decrement(
        {total_likes:+1},{
          where:{
            id:post_id,
            user_id:user_id
          }
        }).then(()=>{
          Post_Like.destroy({
            where:{
              post_id:post_id,
              user_id:user_id
            }
          })
        }).then(()=>{
          res.status(200).json({
            status:1,
            data:{},
            message:"Unlike Successfully"
          })
        })
        .catch(err=>{
            console.log(err);
        })

      
    }
  });
};
module.exports = {
  likes,
};
