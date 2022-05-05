import React from 'react';
import './CodeEditor.scss';
import Editor from '@monaco-editor/react'
import { connect } from 'react-redux';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';




/* This is the Editor class, mainly used for writing code by the user.*/
class CodeEditor extends React.Component {

    // editorDidMount(editor, monaco) {
    //     // editor.focus();
    // }

    handleEditorValidation(markers) {
        // console.log(markers);
    }

    render() {

        const text = this.props.code;


        const options = {
            selectOnLineNumbers: true,
            fontSize: `${this.props.fontSize}px`,
            automaticLayout: true,
        };

        const download_code = async (texe, name = " Mycode.txt ") => {
            console.log(texe);

            const blob = new Blob([text], { type: "text/plain" })

            const href = URL.createObjectURL(blob);
            // console.log(await blob.text());
            const a = Object.assign(document.createElement("a"), {
                href,
                style: "display:none",
                download: name,
            });
            // document.body.appendChild(a);

            a.click();
            URL.revokeObjectURL(href);
            a.remove();
        }
        const copy_code = async () => {
            navigator.clipboard.writeText(text);
        }
        return (
            <div className='editor'>
                <div className='buttons_container'>
                    <ContentCopyIcon className="copy-btn" onClick={copy_code} style={{ fill: 'rgba(255,255,255,0.8)' }} />
                    <DownloadForOfflineIcon className="download-btn" onClick={download_code} style={{ fill: 'rgba(255,255,255,0.8)' }} />
                </div>
                <Editor
                    defaultLanguage={this.props.selectedLanguage}
                    defaultValue={text}
                    value={text}
                    language={this.props.selectedLanguage}
                    theme={`${this.props.theme !== "light" ? "vs-dark" : "vs"}`}
                    options={{ ...options }}
                    onChange={this.props.changeCode}
                    onValidate={this.handleEditorValidation} />
            </ div>
        );
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