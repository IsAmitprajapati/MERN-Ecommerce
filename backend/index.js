// "use strict";
require("dotenv").config();
// require("./models");

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
// const router = express.Router()
const connectDB = require("./config/db")
connectDB()

const routerProduct = require("./routes/productRoute")
const userRoutes = require("./routes/userRoutes")
const routerUpload = require("./routes/uploadRoute")

app.use("/product",routerProduct)
app.use("/user",userRoutes)
app.use("/upload",routerUpload)

//testing server is running or not
app.get("/",(req,res)=>{
  res.send({message : "Server is running"})
})

const PORT = process.env.PORT || 8080;



//Port running 
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
