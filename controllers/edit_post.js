var db = require("../models/");

var Post = db.UserPost;

var update = (req, res) => {
  var post_id = req.params.id;

Post.findOne({
    where:{
        id:post_id,
    }
}).then((post=>{

    if(req.user.id==post.user_id){
        Post.update(req.body,{
            where:{
                id:post_id,

                user_id:req.user.id

            }
        }).then((num)=>{
            if(num==1){
                res.status(200).json({
                    status:1,
                    data:{},
                    message:"Post Updated successfully"});
            }else{
                res.status(200).json({
                    status:0,
                    data:{},
                    message:"Not updated"});
            }
        }).catch((err)=>{
            console.log(err);
        })
    }else{
        res.status(200).json({
            status:0,
            data:{}
            ,message:"Not authorized to update this post"});
    }

})).catch((err)=>{console.log(err)

                   res.status(404).json({
                       status:0,
                       data:{},
                       message:"Post is not found for this id"
                   })
});

};

module.exports = {
  update
};
