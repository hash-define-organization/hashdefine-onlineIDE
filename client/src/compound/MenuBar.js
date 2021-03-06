import React,{useState}from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import './MenuBar.css'
export default function MenuBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [lang,setlang]=useState('C++');
  return (
    <div>
    <span aria-controls="fade-menu" aria-haspopup="true" onClick={(e)=>{ setAnchorEl(e.currentTarget); console.log(lang)}}>{lang}</span>
    
    <Menu
    id="fade-menu"
    className="MuiPopover-paper"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={()=>{setAnchorEl(null)}}
    TransitionComponent={Fade}
   
  >
    
    <MenuItem onClick={()=>{setAnchorEl(null); setlang('cpp')}}>C++</MenuItem>
    <MenuItem onClick={()=>{setAnchorEl(null); setlang('java')}}>Java</MenuItem>
    <MenuItem onClick={()=>{setAnchorEl(null); setlang('javascript')}}>Javascript</MenuItem>
    <MenuItem onClick={()=>{setAnchorEl(null); setlang('python')}}>Python</MenuItem>
  </Menu>
  </div>
  )
}
