const UserModel = require("../../models/user");
const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALT_ROUNDS);
const jwt = require('jsonwebtoken');
const transporter  = require("../../config/email");

// jwt.sign({
//   exp: Math.floor(Date.now() / 1000) + (60 * 60),
//   data: 'foobar'
// }, 'secret');


module.exports = forgotPassword = (req, res) => {  
  // res.send({message : "Check you email" , alert : true})
  const { email } = req.body;
  UserModel.findOne({ email: email }, async (err, result) => {
    if(result){
      const token = jwt.sign({email : result.email},'shhhhh')
      console.log(result._id)

      const mailOptions = {
        from : process.env.EMAIL_FROM,
        to : email,
        subject : "Password reset",
        text : `Check the link to reset your password http://localhost:3000/reset-password/${result._id}`
      }
      
      transporter.sendMail(mailOptions,(err)=>{
        if(err){
          console.log(err)
          return res.status(500).send({ error: "Error sending email" });
        }
        res.send({ message: "Password reset email sent" ,success : true})
      })
    }else{
      res.send({message : "User not available", success : false})
    }
  })
  
};
