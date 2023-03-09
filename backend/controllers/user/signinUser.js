const UserModel = require("../../models/user");
const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALT_ROUNDS);

module.exports = signinUser = (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  UserModel.findOne({ email: email }, async (err, result) => {
    if (result) {
      const userPassword = result.password;
      // const checkPassword = bcrypt.compare(password, userPassword);
      // console.log(checkPassword);
      if (userPassword == password) {
        res.send({alert : "success", message : "Successfully Login", data : {
          firstName : result.firstName,
          lastName : result.lastName,
          email : result.email,
          image : result.image,
          cartItem : result.cartItem,
          _id : result._id,
        }});
      }
      else{
        res.send({alert : "error", message : "Check you email and password"});
      }
    } else {
      res.send({alert : "error", message : "This email id not available in database"});
    }
  });
};
