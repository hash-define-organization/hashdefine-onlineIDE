import React from 'react'
import Input from './Input'
import Output from './Output'
export default function Ioarea() {
  return (
    <div className="right">
      <Input/>
      <div className="seperator" id="horizontal-seperator"></div>
      <Output/>
    </div>
  )
}
