const mongoose=require('mongoose')
require('dotenv').config()


// Instead of dummy password use ur MongoDB Atlas credentials 

const DB='mongodb+srv://dbUser:'+process.env.PASSWORD+'@cluster0.45ipq.mongodb.net/hashIDE?retryWrites=true&w=majority&ssl=true'
mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })   
 .then(() => 
     console.log("DATABASE CONNECTED"))
   .catch(err => console.log(err));

 