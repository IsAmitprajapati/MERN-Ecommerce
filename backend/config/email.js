const nodemailer = require("nodemailer")
// process.env.EMAIL_FROMprocess.env.PASSWORD_FROM
console.log(process.env.PASSWORD_FROM)
const smtpConfig = {
    service : "gmail",
    // port : 465,
    // secure : false,
    // ignoreTLS : true,
    // logger : true,
    // debug : true,
    auth : {
            user : process.env.EMAIL_FROM,
            pass : process.env.PASSWORD_FROM,
    }
}

const transporter  = nodemailer.createTransport(smtpConfig)

module.exports =  transporter