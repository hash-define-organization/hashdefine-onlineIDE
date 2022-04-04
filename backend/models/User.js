const mongoose=require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
require('dotenv').config()

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique:true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    collegeName:{
        type:String
    },
    tokens:[{
        token:{
                type:String,
                required:true
        }
    }],
    LanguagesKnown:[{
        language:{
                type:String
        }
      }]
    })

    userSchema.pre('save', async function (next) {            
        const user = this  
        if (user.isModified('password')) {
            user.password = await bcrypt.hash(user.password,8)    
        }
        next()
    })


    userSchema.statics.findByCredentials = async (username, password) =>{
        const user = await User.findOne({username: username}) 
        if(!user){
            throw new Error('unable to login') 
        }
        const isMatch = await bcrypt.compare(password, user.password)  
        if(!isMatch){
            throw new Error('unable to login')
        }
        return user
    } 


    // Generating the JWT-Authentication-Token
    userSchema.methods.generateAuthToken=async function(){
        const user=this
        const token=jwt.sign({_id:user._id.toString()},"hello")
        user.tokens=user.tokens.concat({token})  
        await user.save()
        return token
    }

const User=mongoose.model('User', userSchema)
module.exports=User