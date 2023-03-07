const UserModel = require("../../models/user")
const bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.SALT_ROUNDS);
//register
module.exports = signupUser = (req,res)=>{
    console.log(req.body)
    const { email ,password} = req.body
    UserModel.findOne({email : email},async(err,result)=>{
        console.log(result)
        if(result){
            res.send({message : "This email address is already registered" , alert : "error"})
        }
        else{ 
            const hash =  await bcrypt.hashSync(password, saltRounds);
            const user =  UserModel({...req.body, password : hash })
            const save = await user.save() 
            
            res.send({message : "User Registered Successfully" , alert : "success"})
        }
        
    })
    
    
}
