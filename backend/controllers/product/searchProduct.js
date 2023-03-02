const ProductModel = require("../../models/product")

module.exports = searchProduct = (req,res)=>{
    console.log(req.query.q)
    const data = ProductModel()
    res.send({message : "Getting data"})
}