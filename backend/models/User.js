const mongoose=require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

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

const User=mongoose.model('User', userSchema)
module.exports=User