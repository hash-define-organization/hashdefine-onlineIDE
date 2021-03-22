const controller=require('./controller');
module.exports=(app)=>{
  app.post('/api/compiler',controller.compiler)
}