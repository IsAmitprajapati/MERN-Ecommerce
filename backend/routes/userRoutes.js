const express = require("express")
const userRoutes = express.Router()



// Product router
const deleteCartItem = require("../controllers/user/deleteCartItem")
const signinUser = require("../controllers/user/signinUser")
const signupUser = require("../controllers/user/signupUser")
const updateUser = require("../controllers/user/updateUser")
const forgotPassword = require("../controllers/user/forgotPassword")
const { auth } = require("../middleware/auth")
const { userDetails } = require("../controllers/user/userDetails")
const { resetPassword } = require("../controllers/user/resetPassword")


userRoutes.post("/signin",signinUser)
userRoutes.post("/signup",signupUser) 
userRoutes.post("/forgotpassword",forgotPassword) 
userRoutes.put("/update",updateUser)
userRoutes.delete("/deleteCartItem",deleteCartItem)


//token is availale
userRoutes.get("/userDetails",auth,userDetails)
userRoutes.put("/reset-password",resetPassword)



module.exports = userRoutes