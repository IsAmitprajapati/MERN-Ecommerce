const ProductModel = require("../../models/product");

module.exports = getProduct = async(req, res) => {
  console.log("get Product..")
  try {
    const data = await ProductModel.find({});
    res.send(data);
  } catch (err){
            res.send({message : err})
  }
};
