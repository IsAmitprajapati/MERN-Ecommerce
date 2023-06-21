const UserModel = require("../../models/user");


async function userDetails(req,res){
   console.log(req.user)

}

module.exports = userDetails