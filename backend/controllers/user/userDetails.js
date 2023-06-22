const UserModel = require("../../models/user");


async function userDetails(req,res){
   try{

      UserModel.findOne({ email: req.user.email }, async (err, result) => {
         res.send({alert : "success", message : "Successfully Login", data : {
          firstName : result.firstName,
          lastName : result.lastName,
          email : result.email,
          image : result.image,
          cartItem : result.cartItem,
          _id : result._id,
        }});
      })
   
   }
   catch(err){
      res.status(500).json({
         message : "Internal Server error...!"
      })
   }

}

module.exports = {userDetails}