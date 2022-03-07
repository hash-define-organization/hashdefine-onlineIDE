import React from 'react';
import './Terminal.scss';

class Terminal extends React.Component {
    
    render() {

        return (
            <div className={`terminal ${this.props.isCollapsed && 'collapsed'}`} ref = {this.terminal}>
                <div className='subTerminal' style = {{ borderBottom: "1px solid white"}}>
                    <div className='fieldName'>
                        Enter Input 
                    </div>
                    <textarea value={this.props.input} onChange={this.props.changeInput} className = "textField" placeholder='Input Goes Here ...' />
                </div>
                <div className="subTerminal">
                    <div className='fieldName'>Output</div>
                    <textarea className = "textField" disabled value={this.props.output === "" ? this.props.error : this.props.output} />
                </div>
            </div>
        )
    }
}

export default Terminal;