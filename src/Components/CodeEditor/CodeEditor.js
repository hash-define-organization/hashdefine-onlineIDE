import React from 'react';
import './CodeEditor.scss';
import Editor from '@monaco-editor/react'
import { connect } from 'react-redux';
import changeCode from '../../Actions/changeCode'
class CodeEditor extends React.Component {

    editorDidMount(editor, monaco) {
        editor.focus();
    }
    handleEditorValidation(markers) {
        // console.log(markers);
    }
    render() {
        
        const options = {
            selectOnLineNumbers: true,
            fontSize: `${this.props.fontSize}px`,
            automaticLayout: true,
        };
        const codeChange = (e) =>{
            this.props.changeCode(e);
        }
        return (
            <div className='editor'>
                <Editor
                    defaultLanguage={this.props.selectedLanguage}
                    defaultValue={ this.props.code}
                    value={ this.props.code}
                    language={this.props.selectedLanguage}
                    theme={`${this.props.theme !== "light" ? "vs-dark": "vs"}`}
                    options={{...options}}
                    onChange={codeChange}
                    onValidate={this.handleEditorValidation}
                    onMount={this.editorDidMount}
                />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
	return {
        theme: state.theme,
        fontSize: state.fontSize,
        selectedLanguage: state.currentLanguage.selectedLanguage,
        selectedId: state.currentLanguage.selectedId,
        code: state.code.code
    }
}

export default connect(mapStateToProps, {changeCode})(CodeEditor);