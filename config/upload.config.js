const multer=require("multer")

const storage=multer.diskStorage(

{

    destination:function(req,file,cb){

        cb(null,'./uploads');
    },

    filename:function(req,file,cb){
        cb(null,file.originalname)
    }

});

const fileFilter=(req,file,cb)=>{

    if(file.mimetype=='image/jpg'||file.mimetype=="image/png"||file.mimetype=="image/jpeg"||file.mimetype=="video/mp4"||
    file.mimetype=="video/x-flv"||file.mimetype=="application/x-mpegURL||video/MP2T"||file.mimetype=="video/3gpp"||
    file.mimetype=="video/quicktime"||file.mimetype=="video/x-msvideo"||file.mimetype=="video/x-ms-wmv"){
        cb(null,true);
    }

    else{
    cb(null,false);}
}


const upload=multer({storage:storage,
                    
                     fileFilter:fileFilter

});


module.exports = upload;