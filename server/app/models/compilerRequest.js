const request = require('request');
const headers = require('../config/keys');

exports.getSID=(options)=>{
  return new Promise(function (resolve, reject) {
    request(options, (error, response, body) => {
      if (error) {
        reject(error);
      }
      else{
        resolve(body)
      }
    })
  })
}

exports.getResult=(sid)=> {
  return new Promise(function (resolve, reject) {
    dataString = `sid=${sid}&requestType=fetchResults`;
    var optionss = {
      url: 'https://ide.geeksforgeeks.org/submissionResult.php',
      method: 'POST',
      headers: headers,
      body: dataString,
    };
    request(optionss, callbackk);
    function callbackk(error, response, body) {
      stat = JSON.parse(body);
      if (!error && response.statusCode == 200) {
        if (stat.status == 'IN-QUEUE') {
          request(optionss, callbackk);
        } else {
          resolve(stat);
        }
      }
      else{
        reject(error)
      }
    }
  })
}