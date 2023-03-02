const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

//cart item schema
const cartSchema = new mongoose.Schema({
  _id: ObjectId,
  name: {type : String,trim : true},
  description: {type : String,trim : true},
  brand: {type : String,trim : true},
  image: {type : Array,trim : true},
  actualPrice: {type : Number,trim : true},
  sellPrice: {type : Number,trim : true},
  qty: {type : Number,trim : true},
  totalQty: {type : Number,trim : true},
  totalPrice: {type : Number,trim : true},
  
});

//user schema
const userSchema = new mongoose.Schema({
  firstName: {
    type : String,
    trim : true
  },
  lastName: {
    type : String,
    trim : true
  },
  email: {
    type: String,
    required: true,
  },
  password : {
    type : String,
    trim : true
  },
  image: String,
  cartItem: [cartSchema],
  token : String,
  
});



module.exports =  mongoose.model("user", userSchema);;
