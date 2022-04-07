const mongoose=require('mongoose')
require('dotenv').config()


// Instead of dummy password use ur MongoDB Atlas credentials 
// PASSWORD value can be changed in .env
// .env file is ignored by git thus deliberately renamed it as .env.sample

const DB='mongodb+srv://dbUser:'+process.env.PASSWORD+'@cluster0.45ipq.mongodb.net/hashIDE?retryWrites=true&w=majority&ssl=true'
mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })   
 .then(() => 
     console.log("DATABASE CONNECTED"))
   .catch(err => console.log(err));
