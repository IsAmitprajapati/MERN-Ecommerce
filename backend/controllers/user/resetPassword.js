
const UserModel = require("../../models/user");
const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALT_ROUNDS);


async function resetPassword(req, res) {
    const { newPassword, confirmPassword, _id } = req.body
    try {
        if (newPassword === confirmPassword) {
            const hash = await bcrypt.hash(newPassword, saltRounds);
            console.log(req.body)
            UserModel.findOne({ _id : _id }, async (err, result) => {
                if(!err){
                    UserModel.updateOne({_id : _id},{
                        $set : { password : hash } 
                    })

                    res.json({
                        message : "Password update successfully...!",
                        error : false
                    })
                }
            })

        }else{
            res.json({
                message : "new Password and Confirm password same.",
                error : true
            })
        }
    }
    catch (err) {
        res.json({
            error: true,
            message  : err
        })
    }
}

module.exports = { resetPassword }