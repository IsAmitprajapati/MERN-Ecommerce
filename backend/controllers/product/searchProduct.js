const ProductModel = require("../../models/product")

module.exports = searchProduct = async(req,res)=>{
    console.log(req.query.q)
    const query = req.query.q
    const regex = new RegExp(query,"i","g")

    const data = await ProductModel.find({"$or" : [
        {"title" : regex },
        // {"description" : regex },
        {"category" : regex }
    ]})

    if(data.length){
        res.send({message : "Search Results", data,alert : "success"})
    }
    else{
        res.send({message : "No Search Results", data,alert : "success"})
    }
    
}