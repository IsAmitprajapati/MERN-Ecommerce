const UserModel = require("../../models/user");
const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALT_ROUNDS);
//register
module.exports = signupUser = (req, res) => {
    console.log(req.body);
  try {
    console.log(req.body);
    console.log("sign up")
    const { email, password, confirmPassword} = req.body;
    UserModel.findOne({ email: email }, async (err, result) => {
      if (result) {
        res.send({
          message: "This email address is already registered",
          alert: "error",
        });
      } else {
        const hash =  await bcrypt.hash(password, saltRounds);
        // console.log(hash)
        if(confirmPassword == password){
            const user = new UserModel({
              ...req.body,
              password : hash
            });
            const save = await user.save();
            res.send({ message: "User Registered Successfully", alert: "success" });
        }else{
            res.send({ message: "Check your password", alert : "error" });
        }
       
      }
    });
  } catch (err) {
    res.send({ message: err });
  }
};
