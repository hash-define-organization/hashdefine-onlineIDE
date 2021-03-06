
import React, { useState } from "react";
import { ControlledEditor as MonacoEditor } from "@monaco-editor/react";
export const CodeEditor = () => {
  const [code, setCode] = useState(
 `#include <iostream>
  using namespace std;
  
  int main() {
    // your code goes here
    return 0;
  }
  `);

  const options = {
    minimap: {
      enabled: false
    }
  };

  const changeHandler = (evt, newText) => {
    console.log(newText);
    setCode(newText);
  };

  const editorDidMount = (editor, monaco) => {
    console.log("editorDidMount", editor);
  };

  return (
    <MonacoEditor
      language="cpp"
      theme="vs-dark"
      value={code}
      options={options}
      onChange={changeHandler}
      editorDidMount={editorDidMount}
    />
  );
};
