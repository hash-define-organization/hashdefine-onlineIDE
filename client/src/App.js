import React, { useState } from 'react';
import axios from 'axios';
import Editor from './compound/Editor';
import './App.css';
import Ioarea from './compound/Ioarea';

function App() {
  const [inputs, setinput] = useState('');
  const [output, setoutput] = useState('');

  const input = (data) => {
    setinput(data);
  };

  const data = (code, langs) => {
    setoutput('loading');

    if (langs === 'cpp') langs = 'Cpp';
    else if (langs === 'python') langs = 'Python';
    else if (langs === 'python3') langs = 'Python3';
    else if (langs === 'java'){
      langs = 'Java'

      code=`
      import java.io.*;
      import java.util.*;
      import java.lang.*;
      class GFG {
	      ${code}
      }
      `
    }
    else if (langs === 'c') langs = 'c';
    else if (langs === 'cpp14') langs = 'Cpp14';

    (async () => {
      axios
        .post('http://localhost:4000/api/compiler', {
          lang: langs,
          code: code,
          input: inputs,
          save: 'false',
        })

        .then(function (response) {
          if (!response.data.output) {
            if (response.data.cmpError === undefined) {
            } else {
              const ree = `COMPILE TIME ERROR :\n\n'${response.data.cmpError}`;
              setoutput(ree);
            }
            if (response.data.rntError === undefined) {
            } else {
              const ree = `RUN TIME ERROR :\n\n'${response.data.rntError}`;
              setoutput(ree);
            }
          } else {
            const ree = `${response.data.output}`;
            console.log(ree);
            setoutput(ree);
          }
        })
        .catch(function (error) {
          setoutput(error);
        });
    })();
  };

  return (
    <div className="content-container" id="maincontent">
      <Editor data={data} />
      <div className="seperator" id="vertical-seperator"></div>
      <Ioarea input={input} output={output} />
    </div>
  );
}

export default App;
