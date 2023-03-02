const express = require("express")
const routerProduct = express.Router()


// Product router
const getProduct = require("../controllers/product/getProduct")
const deleteProduct = require("../controllers/product/deleteProduct")
const saveProduct = require("../controllers/product/saveProduct")
const updateProduct = require("../controllers/product/updateProduct")
const searchProduct = require("../controllers/product/searchProduct")

routerProduct.get("/",getProduct)
routerProduct.post("/save",saveProduct)
routerProduct.put("/update",updateProduct)
routerProduct.delete("/delete",deleteProduct)
routerProduct.get("/search",searchProduct)

module.exports = routerProduct

