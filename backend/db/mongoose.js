const mongoose=require('mongoose')
require('dotenv').config()
const password='dummypassword'
const DB='mongodb+srv://dbUser:'+password+'@cluster0.45ipq.mongodb.net/hashIDE?retryWrites=true&w=majority&ssl=true'
mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })   
 .then(() => 
     console.log("DATABASE CONNECTED"))
   .catch(err => console.log(err));

 