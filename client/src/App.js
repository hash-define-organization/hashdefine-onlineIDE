import React, { useState } from 'react';
import Editor from './compound/Editor'
import './App.css'
import Ioarea from './compound/Ioarea'

function App() {
  
  const [inputs, setinput]=useState('');
  const [output, setoutput]=useState('');

  const input=(data)=>{
    setinput(data);
  }
  const data=(code,langs)=>{
    

     if(langs==='cpp') langs='Cpp14'
     else if(langs==='python') langs='Python3'
     else if(langs==='java') langs="Java"


    console.log(code);
    console.log(langs);
    console.log(inputs);

    
  }

  return (
    <div className="content-container" id="maincontent">
    <Editor data={data}/>
    <div className="seperator" id="vertical-seperator"></div>
    <Ioarea input={input} output={output}/>
    </div>
    
  );
}

export default App;
