var db = require("../models/");

var Post = db.UserPost;

var userMedia = db.post_media;

var create_post = (req, res) => {
  var post = {
    description: req.body.description,

    user_id: req.user.id,
  };

  Post.create(post)
    .then(async (user) => {
      const messages = [];

      console.log("user",user);
      for (const file of req.files) {
          console.log("file",file);
        const uploadfile = await userMedia.create({
          url: file.path,
          type: file.mimetype.split("/")[0],
          post_id: user.id,
        });
        console.log(uploadfile);

        if (!uploadfile) {
          const result = {
            status:0,
            data: file.originalname,
            message: "cannot uploaded successfully",
          };
          messages.push(result);
        } else {
          const result = {
            status:1,
            data: file.originalname,
            message: "Upload Successfully!",
          };

          messages.push(result);
        }
      }

      return res.json(messages);
    })
    .catch((err) => {
        console.log("err",err);
      res.status(500).json("error occured");
    });
};

module.exports = {
  create_post
};
