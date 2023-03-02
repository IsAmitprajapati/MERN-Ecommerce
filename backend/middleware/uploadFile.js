const multer = require("multer");

//multer file upload middleware
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      let fileName = file.originalname.split(".").join("_"+Date.now()+".");
      cb(null, fileName);
    },
  });
  
  const uploadMiddleware = multer({ storage: storage }).single("image");

  module.exports = uploadMiddleware