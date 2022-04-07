const mongoose = require('mongoose')
const express = require('express')
const User = require('../models/User')
const router = new express.Router()
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const { findByIdAndDelete } = require('../models/User')
require('dotenv').config()


// C: CREATE
//create user(register)
router.post('/registerUser', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user })
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

// R: Read
//View Profile (Route under Authentication)
router.get('/user', auth, async (req, res) => {
    if (!req.user) {
        res.send("Something went wrong")
    }
    res.send(req.user)
})


// U: Update
// Update Profile (Route under Authentication)
router.patch('/userUpdate', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['username', 'password', 'collegeName', 'LanguagesKnown']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// D: Delete
//Delete User profile (Route under authentication)
router.delete('/userDelete', auth, async (req, res) => {
    if (!req.user) {
        res.send("Something went wrong")
    }
    const user = await User.findByIdAndDelete(req.user._id);
    res.send("Profile Deleted Successfully!!")
})



module.exports = router