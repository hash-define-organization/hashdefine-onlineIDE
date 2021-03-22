import React, { useState } from 'react';
import { CodeEditor } from './CodeEditor';
import GetAppIcon from '@material-ui/icons/GetApp';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import Menu from '@material-ui/core/Menu';
import { saveAs } from 'file-saver';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import './MenuBar.css';
export default function Editor(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [langs, setlang] = useState('cpp');
  const [
    code,
    setcode,
  ] = useState(`//Online Cpp compiler to run Cpp program online
  #include <iostream>
  using namespace std;
  
  int main() {
    //your code goes here
    cout<<"Welcome To Hashdefine IDE !";
    return 0;
  }
  `);

  const changeHandler = (evt, newText) => {
    console.log(newText);
    setcode(newText);
  };

  const download = () => {
    console.log('download');
    var blob = new Blob([code], {
      type: 'text/plain;charset=utf-8',
    });

    let filename;

    if (langs === 'cpp') filename = 'code.cpp';
    if (langs === 'cpp14') filename = 'code.cpp';
    else if (langs === 'java') filename = 'code.java';
    else if (langs === 'javascript') filename = 'code.js';
    else if (langs === 'python') filename = 'code.py';
    else if (langs === 'python3') filename = 'code.py';
    else if (langs === 'c') filename = 'code.c';
    saveAs(blob, filename);
  };

  return (
    <div class="left">
      <div className="window">
        <div className="controls-container">
          <button
            className="tab selected"
            onClick={() => {
              props.data(code, langs);
            }}
          >
            <PlayCircleFilledWhiteIcon className="icon" />
            <span>Run</span>
          </button>
          <button
            className="download"
            onClick={() => {
              download();
            }}
          >
            <GetAppIcon />
          </button>
          <button className="tabs">
            <span>
              <span
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={(e) => {
                  setAnchorEl(e.currentTarget);
                }}
              >
                {' '}
                {langs}{' '}
              </span>
              <Menu
                id="fade-menu"
                className="MuiPopover-paper"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => {
                  setAnchorEl(null);
                }}
                TransitionComponent={Fade}
              >
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    setlang('c');
                    setcode(`// Online C compiler to run C program online
#include <stdio.h>

int main() {
    // Write C code here
    printf("Welcome To Hashdefine IDE !");
    
    return 0;
}`);
                  }}
                >
                  C
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    setlang('cpp');
                    setcode(`//Online Cpp compiler to run Cpp program online
  #include <iostream>
  using namespace std;
  
  int main() {
    //your code goes here
    cout<<"Welcome To Hashdefine IDE !";
    return 0;
  }
  `);
                  }}
                >
                  C++
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    setlang('cpp');
                    setcode(`//Online Cpp14 compiler to run Cpp14 program online
  #include <iostream>
  using namespace std;
  
  int main() {
    //your code goes here
    cout<<"Welcome To Hashdefine IDE !";
    return 0;
  }
  `);
                  }}
                >
                  Cpp14
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    setlang('java');
                    setcode(`/*package whatever //do not write package name here */

import java.io.*;

class GFG {
	public static void main (String[] args) {
		System.out.println("Welcome To Hashdefine IDE !");
	}
}`);
                  }}
                >
                  Java
                </MenuItem>
                {/* <MenuItem onClick={()=>{setAnchorEl(null);setlang('javascript');setcode(`console.log("Welcome To HashDefine !")`)}}>Javascript</MenuItem> */}

                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    setlang('python');
                    setcode(`#code
print("Welcome To Hashdefine IDE !")`);
                  }}
                >
                  Python
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    setlang('python');
                    setcode(`#code
print("Welcome To Hashdefine IDE !")`);
                  }}
                >
                  Python3
                </MenuItem>
              </Menu>
            </span>
          </button>
        </div>
        <div className="pages">
          <div className="selected">
            <CodeEditor
              code={code}
              changeHandler={changeHandler}
              lang={langs}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
