// "use strict";
require("dotenv").config();
// require("./models");

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false }))
const router = express.Router()
const connectDB = require("./config/db")
connectDB()

const routerProduct = require("./routes/productRoute")
const userRoutes = require("./routes/userRoutes")
const routerUpload = require("./routes/uploadRoute")

router.use("/product",routerProduct)
router.use("/user",userRoutes)
router.use("/upload",routerUpload)

//testing server is running or not
app.get("",(req,res)=>{
  res.send({message : "Server is running"})
})

//router all
app.use("/",router)


const PORT = process.env.PORT || 8080;



//Port running 
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
