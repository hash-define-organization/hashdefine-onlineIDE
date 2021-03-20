import React from 'react'
import Input from './Input'
import Output from './Output'
export default function Ioarea(props) {
  

  const getInput=(data)=>{
   props.input(data);
  }
  return (
    <div className="right">
      <Input getInput={getInput}/>
      <div className="seperator" id="horizontal-seperator"></div>
      <Output output={props.output}/>
    </div>
  )
}
