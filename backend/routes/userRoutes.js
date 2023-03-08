const express = require("express")
const userRoutes = express.Router()


// Product router
const deleteCartItem = require("../controllers/user/deleteCartItem")
const signinUser = require("../controllers/user/signinUser")
const signupUser = require("../controllers/user/signupUser")
const updateUser = require("../controllers/user/updateUser")
const forgotPassword = require("../controllers/user/forgotPassword")

userRoutes.post("/signin",signinUser)
userRoutes.post("/signup",signupUser) 
userRoutes.post("/forgotpassword",forgotPassword) 
userRoutes.put("/update",updateUser)
userRoutes.delete("/deleteCartItem",deleteCartItem)



module.exports = userRoutes