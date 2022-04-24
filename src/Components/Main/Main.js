import React from 'react';
import CodeEditor from '../CodeEditor/CodeEditor';
import Terminal from '../Terminal/Terminal';
import './Main.scss';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CircularProgress from '@mui/material/CircularProgress';
import axios from '../../axios';
import { connect } from 'react-redux';
import themeAction from '../../Actions/theme';

/* This Main class that calls CodeEditor and Terminal component, it is here that provides
   symbol for run button. Main class provides different features for our webiste, for example error handling for our user input in codeEditor class, likewise many other. */

class Main extends React.Component  {

    constructor(props) {
        super(props);
        
        this.collapseAndShow = this.collapseAndShow.bind(this);
        this.main = React.createRef();
        
        this.state = {
            collapsed: false,
            codeSubmitting: false,
            code: '\n',
            input: '',
            output: '',
            error: ''
        }

        this.submitCode = this.submitCode.bind(this);
        this.changeCode = this.changeCode.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.getCode = this.getCode.bind(this);
    }

    changeCode(code) {
        this.setState({
            code: code
        })
    }

    changeInput(event) {
        this.setState({
            input: event.target.value
        })
    }

    async submitCode() {
        
        this.setState({codeSubmitting: true});

        const response = (await axios.post('/api/v1/ide/getcode', {
            language: this.props.selectedLanguage,
            code: this.state.code,
            input: this.state.input
        })).data;

        let error_msg= "";

        if(response.status_msg === "Time Limit Exceeded") {
            error_msg = response.status_msg;
        }
        else {
            error_msg = response.full_compile_error;
        }

        this.setState({codeSubmitting: false, output: response.code_output.join('\n'), error: error_msg});

    }

    collapseAndShow() {
        this.main.current.classList.toggle('collapsed');
        this.setState(prevState => ({collapsed: !prevState.collapsed}));
    }

    async getCode() {
        const response = (await axios.get(`/api/v1/ide/${this.props.selectedId}`)).data
        // console.log(response)
        this.changeCode(response)
    }

    componentDidMount() {
        this.getCode();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedId !== this.props.selectedId) {
            this.getCode();
        }
    }
    
    render() {
        return (
            <div className = "main" ref = {this.main}>
                <CodeEditor code={this.state.code} changeCode={this.changeCode} />
                <Terminal output={this.state.output} input = {this.state.input} error= {this.state.error} changeInput = {this.changeInput} isCollapsed = {this.state.collapsed} />
                <KeyboardArrowRightIcon className = {`showCode ${this.state.collapsed && 'showCode--collapsed'}`} onClick = {this.collapseAndShow} />
                
                { this.state.codeSubmitting ? 
                    <CircularProgress className = "submitCode submitCode--progress" />:
                    <KeyboardArrowRightIcon className = "submitCode" onClick = {this.submitCode} />
                }

            </div>
        );
  }
}

function mapStateToProps(state, ownProps) {
	return {
        theme: state.theme,
        selectedLanguage: state.currentLanguage.selectedLanguage,
        selectedId: state.currentLanguage.selectedId
    }
}

export default connect(mapStateToProps, {themeAction})(Main);