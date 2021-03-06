import React from 'react'
import {CodeEditor} from './CodeEditor'
import GetAppIcon from '@material-ui/icons/GetApp';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import MenuBar from './MenuBar'
export default function Editor() {
  return (
    <div class="left">
				<div className="window">
					<div className="controls-container">
						<button className="tab selected">
						<PlayCircleFilledWhiteIcon className="icon"/>
							<span>Run</span></button>
						<button className="download"><GetAppIcon /></button>
						<button className="tabs">
							<span>
								<MenuBar/>
							</span>
						</button>

					</div>
					<div className="pages">
						<div className="selected">
						<CodeEditor/>
						</div>
					</div>

				</div>
			</div>
  )
}
