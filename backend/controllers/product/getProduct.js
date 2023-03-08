const ProductModel = require("../../models/product");

module.exports = getProduct = async(req, res) => {
  try {
    const data = await ProductModel.find({});
    res.send(data);
  } catch (err){
            console.log(err)
  }
};
