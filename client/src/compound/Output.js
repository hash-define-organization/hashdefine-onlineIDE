import React from 'react';
import Container from './Container';
import './MenuBar.css';
export default function Output(props) {
  const render = () => {
    if (props.output == '' || props.output == undefined) return '';
    else if (props.output === 'loading') {
      return <Container className="loading" />;
    } else {
      return props.output;
      // return props.output.split('\n').map(e=>{return <li className="listo">{e}</li>});
    }
  };

  return (
    <div className="window" id="output-window">
      <div className="controls-container">
        <button className="tab selected">
          <span>Output</span>
        </button>
      </div>
      <div className="pages">
        <div className="selected" style={{ margin: '10px' }}>
          <pre>{render()}</pre>
        </div>
      </div>
    </div>
  );
}
