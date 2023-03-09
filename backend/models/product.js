const { ObjectId } = require("mongodb")
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    // _id : ObjectId,
    title : String,
    description : String,
    brand : String,
    image : Array,
    price : Number,
    sellPrice : Number,
    category : String,
})

module.exports = mongoose.model("product",productSchema)
