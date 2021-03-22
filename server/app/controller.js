const {createcompiler}=require('./models/compiler');
exports.compiler=async (req,res)=>{
  try{
    let response=await createcompiler(req.body);
    res.status(200).send(response);
  }
  catch(ex){
    res.status(400).send(ex.message);
  }
}