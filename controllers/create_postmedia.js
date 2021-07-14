var db = require("../models/");

var userMedia = db.UserPostMedia;

var Post = db.UserPost;

var postmedia = (req, res) => {
  var post_id = req.user.id;
  var id = req.params.id;
  Post.findOne({ where: { id: id, user_id: post_id } })
    .then(async (user) => {
      const messages = [];

      for (const file of req.files) {
        const uploadfile = await userMedia.create({
          url: file.path,
          type: file.mimetype.split("/")[0],
          post_id: user.id,
        });
        console.log(uploadfile);

        if (!uploadfile) {
          const result = {
            status: 0,
            filename: file.originalname,
            message: "cannot uploaded successfully",
          };
          messages.push(result);
        } else {
          const result = {
            status: 1,
            filename: file.originalname,
            message: "Upload Successfully!",
          };

          messages.push(result);
        }
      }

      return res.json(messages);
    })
    .catch((err) => {
      res.status(500).json("error occured");
    });
};

module.exports = {
  postmedia,
};
