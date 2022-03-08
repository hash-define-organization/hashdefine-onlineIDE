const mongoose=require('mongoose')
const express=require('express')
const User=require('../models/User')
const router=new express.Router()

//create user(register)
router.post('/registerUser',async (req,res)=>{
    const user=new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send('UserName Already Taken!!').redirect('/registerUser')
    }
})


//user login
router.post('/loginUser',async (req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.username,req.body.password)
        res.send(user) 
    }catch(e){
        res.status(400).send('Login Failed').redirect('/loginUser')
    }
})

module.exports=router