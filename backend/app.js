require('./db/mongoose.js')
const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const port=process.env.PORT || 5000
app.use(express.json())
 
const userRoute=require('./routes/user')
app.use(userRoute)


app.listen(port,()=>{
    console.log("Server started on "+process.env.PORT)
})