// "use strict";
require("dotenv").config();
// require("./models");

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false }));

const routerProduct = require("./routes/productRoute");
const userRoutes = require("./routes/userRoutes");
const routerUpload = require("./routes/uploadRoute");
const routerPayment  = require("./routes/payment");

app.use("/product", routerProduct);
app.use("/user", userRoutes);
app.use("/upload", routerUpload);
app.use("/payment", routerPayment);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

//connected to database then run the server
const connectDB = require("./config/db");
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
  });
});



//Amit Prjapati