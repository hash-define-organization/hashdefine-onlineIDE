import React from 'react'

export default function Output(props) {
  return (
    <div className="window" id="output-window">
					<div className="controls-container">
						<button className="tab selected"><span>Output</span></button>
					</div>
					<div className="pages">
						<div className="selected">
						{props.output}
						</div>
					</div>
				</div>



  )
}
