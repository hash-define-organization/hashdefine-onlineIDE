
import Editor from './compound/Editor'
import './App.css'
import Ioarea from './compound/Ioarea'

function App() {
  return (
    <div className="content-container" id="maincontent">
    <Editor/>
    <div className="seperator" id="vertical-seperator"></div>
    <Ioarea/>
    </div>
    
  );
}

export default App;
