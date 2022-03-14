import React from 'react';
import './Terminal.scss';


 /* Terminal class has two inner subTerminals one is for Input terminal where
    user will enter the input, another one is for output, where they can view the result
    of their desired input.*/
class Terminal extends React.Component {
    
    render() {

        return (
            <div className={`terminal ${this.props.isCollapsed && 'collapsed'}`} ref = {this.terminal}>
                <div className='subTerminalInput' style = {{ borderBottom: "1px solid white"}}>
                    <div className='fieldNameInput'>
                        Enter Input 
                    </div>
                    <textarea value={this.props.input} onChange={this.props.changeInput} className = "textFieldInput" placeholder='Input Goes Here ...' />
                </div>
                <div className="subTerminalOutput">
                    <div className='fieldNameOutput'>Output</div>
                    <textarea className = "textFieldOutput" disabled value={this.props.output === "" ? this.props.error : this.props.output} />
                </div>
            </div>
        )
    }
}

export default Terminal;