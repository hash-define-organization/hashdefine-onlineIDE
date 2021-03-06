import React from 'react'

export default function Input() {
  return (
  	<div class="window">
           <div className="controls-container">
						<button className="tab selected"><span>Input</span></button>
					</div>
					<div className="pages">
						<div className="selected">
						<textarea id="output" rows="1"></textarea>
						</div>
					</div>
    </div>
  )
}
