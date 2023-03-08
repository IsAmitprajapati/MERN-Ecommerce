const path = require("path");


const uploadImage = (req,res)=>{
    res.send(JSON.stringify({fileName : req.file.filename,message : "Upload Successfully..."}))  
} 

// http://localhost:8080/upload/image/w2.png
const getUploadImage = (req, res) => {
    const image = path.join(__dirname, "../..", "uploads",req.params.fileName)
    res.sendFile(image)
}

module.exports = {uploadImage,getUploadImage}
