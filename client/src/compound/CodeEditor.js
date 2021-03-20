import React from 'react';
import { ControlledEditor as MonacoEditor } from '@monaco-editor/react';
export const CodeEditor = (props) => {
  const options = {
    minimap: {
      enabled: false,
    },
  };

  const editorDidMount = (editor, monaco) => {
    console.log('editorDidMount', editor);
  };

  return (
    <MonacoEditor
      language={props.lang}
      theme="vs-dark"
      value={props.code}
      options={options}
      onChange={props.changeHandler}
      editorDidMount={editorDidMount}
    />
  );
};
