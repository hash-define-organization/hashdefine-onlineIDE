const jwt=require('jsonwebtoken')
const User=require('../models/User')
require('dotenv').config()

const auth=async (req,res,next)=>{
    try{
        const token=req.header('auth-token')
        const decoded=jwt.verify(token,"hello")
        const user= await User.findOne({_id:decoded._id,'tokens.token':token})
        if(!user){
           throw new Error()
       }
       req.token=token   
       req.user=user   
       next()    
    }catch(e){
        res.status(401).send({'error':'Please Authenticate'})
    }
}
module.exports=auth