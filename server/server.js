const express=require('express')
const app=express();
let bodyParser=require('body-parser');
var cors=require('cors')
const port=process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) 

require(`${__dirname}/app/routes`)(app);

app.listen(port,()=>{
  console.log(`server running at ${port}`)
})