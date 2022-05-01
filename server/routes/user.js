const mongoose = require('mongoose')
const express = require('express')
const User = require('../models/User')
const router = new express.Router()
const jwt=require('jsonwebtoken')
const auth = require('../middleware/auth')
require('dotenv').config()

//create user(register)
router.post('/registerUser', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
       const token = await user.generateAuthToken()
       res.status(201).send({user})
       res.redirect("/loginUser");
    } catch (e) {
        res.status(400).send('UserName Already Taken!!')
    }
})


//user login
router.post('/loginUser', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.username, req.body.password)
        const token = await user.generateAuthToken()
        if (user) {
            await res.send(user)
        }
        else {
            res.redirect("/registerUser")
        }
    } catch (e) {
        res.status(400).send('Login Failed')
    }
})

//Dummy protected route 
router.get('/user',auth, async (req, res) => {
    if(!req.user) {
        res.send("Something went wrong")
    }
    res.send("This is a protected route")
})

module.exports = router