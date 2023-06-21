
const auth = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1]
        console.log(token)

        const decode = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decode)

        // if(decode){
            req.user = decode   
            next()
        // }
    }
    catch(err){
        res.json({alert : "error", message : "Invalid Input"})
    }
}

module.exports = auth