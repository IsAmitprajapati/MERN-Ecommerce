const { ObjectId } = require("mongodb")
const ProductModel = require("../../models/product")

module.exports =  updateProduct = async(req,res)=>{
    console.log(req.body)
    try{
        const data = await ProductModel.updateOne(
            { _id : ObjectId(req.body._id) },
            { $set : req.body} ,
            { upsert: false }  
        )
        res.send(data)  
    }
    catch(err){
        res.send({message : err})
    }   
}