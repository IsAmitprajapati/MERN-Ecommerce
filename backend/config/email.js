const nodemailer = require("nodemailer")
// process.env.EMAIL_FROMprocess.env.PASSWORD_FROM
const transporter  = nodemailer.createTransport({
    service : "gmail",
    auth : {
            user : "prajapati.desktop@gmail.com",
            pass : "9307961978",
    }
})
// transporter.verify(function (error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

module.exports =  transporter