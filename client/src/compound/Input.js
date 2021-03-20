import React from 'react'

export default function Input(props) {
  return (
  	<div class="window">
           <div className="controls-container">
						<button className="tab selected"><span>Input</span></button>
					</div>
					<div className="pages">
						<div className="selected">
						<textarea id="output" onChange={(e)=>{props.getInput(e.target.value)}} rows="1"/>
						</div>
					</div>
    </div>
  )
}
