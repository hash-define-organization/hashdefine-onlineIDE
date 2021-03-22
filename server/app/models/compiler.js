const { getSID,getResult} = require('./compilerRequest');
exports.createcompiler = async (res) => {
  try{
    let options = {
      method: 'POST',
      url: 'https://ide.geeksforgeeks.org/main.php',
      headers: {
        'Accept-Encoding': 'gzip, deflate',
        Host: 'ide.geeksforgeeks.org',
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      form: {
        lang: res.lang,
        code: res.code,
        input: res.input,
        save: res.save,
      },
    };
    let _sidObject = await getSID(options);
    let sid= JSON.parse(_sidObject).sid;
    let _JSON=await getResult(sid);
    return _JSON;
  }
  catch(ex){
    return ex;
  }
}
