const express = require("express");
const routerUpload = express.Router({mergeParams : true});
const path = require("path");

const uploadMiddleware = require("../middleware/uploadFile")

//controller
const {uploadImage,getUploadImage} = require("../controllers/upload/image");


//router
routerUpload.post("/image", uploadMiddleware, uploadImage);
routerUpload.get("/image/:fileName", getUploadImage);


module.exports = routerUpload;
