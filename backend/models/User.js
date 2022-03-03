const mongoose=require('mongoose')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
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
    LanguagesKnown:[{
        language:{
                type:String
        }
      }]
    })

 

const User=mongoose.model('User', userSchema)
module.exports=User