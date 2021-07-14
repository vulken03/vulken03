var db = require("../models");
var Post = db.UserPost;

var delete_post = (req, res) => {
  var post_id = req.params.id;

  Post.findOne({
    where: {
      id: post_id,
    },
  }).then((post) => {
    if (req.user.id == post.user_id) {
      Post.destroy({
        where: {
          id: post_id,
          user_id: req.user.id,
        },
      }).then((num) => {
        if (num == 1) {
          res.status(200).json({
             status:1 ,
             data:{}          
            ,message:"Post deleted successfully"});
        } else {
          res.status(200).json({
            status:0,
            data:{},
            message:"Post is not deleted"});
        }
      }).catch(err=>{console.log(err)});
    } else {
      res.status(200).json("you don't authorized to delete");
    }
  }).catch(err=>{

    console.log(err);
    res.status(404).json({
    
    status:0,
    data:{},
    message:"post is not found for given id"

    });

  })
};

module.exports = {
  delete_post,
};
