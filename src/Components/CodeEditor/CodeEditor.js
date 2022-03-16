import React from 'react';
import './CodeEditor.scss';
import Editor from '@monaco-editor/react'
import { connect } from 'react-redux';

/* This is the Editor class, mainly used for writing code by the user.*/
class CodeEditor extends React.Component {

    // editorDidMount(editor, monaco) {
    //     // editor.focus();
    // }

    handleEditorValidation(markers) {
        // console.log(markers);
    }

    render() {
        
        const code = this.props.code;
        
        const options = {
            selectOnLineNumbers: true,
            fontSize: `${this.props.fontSize}px`,
            automaticLayout: true,
        };

        return (
            <div className='editor'>
                <Editor
                    defaultLanguage={this.props.selectedLanguage}
                    defaultValue={code}
                    value={code}
                    language={this.props.selectedLanguage}
                    theme={`${this.props.theme !== "light" ? "vs-dark": "vs"}`}
                    options={{...options}}
                    onChange={this.props.changeCode}
                    onValidate={this.handleEditorValidation}
                    // onMount={this.editorDidMount}
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
        selectedId: state.currentLanguage.selectedId
    }
}

export default connect(mapStateToProps, null)(CodeEditor);