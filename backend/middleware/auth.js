const jwt = require("jsonwebtoken")

async function auth(req,res,next){
    try{
        const token = req.headers.authorization.split(" ")[1]
        console.log(token)

        const decode = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decode)

        req.user = decode   
        next()

    }
    catch(err){
        res.status(401).json({
            error :"Invalid input..."
        });
    }
}

module.exports = { auth } 