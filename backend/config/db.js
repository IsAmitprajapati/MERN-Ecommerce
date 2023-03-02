const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_DATABASE) 
        console.log("Connection Successfull")
    }
    catch(err){
        console.log(err)
    } 
}

module.exports = connectDB