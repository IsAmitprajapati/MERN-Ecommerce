const { ObjectId } = require("mongodb")
const ProductModel = require("../../models/product")

module.exports =  deleteProduct = async(req,res)=>{
    console.log(req.body)
    try{
        const data = await ProductModel.deleteOne({ _id : ObjectId(req.body._id) })
        res.send(data)  
    }
    catch(err){
        res.send(err)
    } 
}