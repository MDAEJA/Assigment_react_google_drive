import React from 'react'
import "../component_css/headerStyle.css"
import "../component_css/sideBarStyle.css"
import SearchIcon from '@mui/icons-material/Search';
import { FormatAlignCenter } from '@mui/icons-material';
import HelpIcon from '@mui/icons-material/Help';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header({photoURL}) {
  return (
    <>
    <div className='header-div'>
       
       <div className='header_logo'>
        <img src='https://tse1.mm.bing.net/th?id=OIP.lgdmCc6UHAWc27h0o4tSbwHaHa&pid=Api&rs=1&c=1&qlt=95&w=107&h=107' alt='google_drive_logo' width='40px'></img>
        <span>Drive</span>
       </div>

       <div className='header_search_bar' style={{marginLeft:'-60px'}}>
        <SearchIcon></SearchIcon>
        <input type='text' placeholder='search'></input>
        <FormatAlignCenter></FormatAlignCenter>
       </div>

       <div className='header_icons'>

       <div style={{display:'flex', gap:'10px'}}>
        <span><HelpIcon></HelpIcon></span>
        <span><SettingsSuggestIcon></SettingsSuggestIcon></span>
       </div>

       <div style={{display:'flex', gap:'10px'}}>
        <span><AppsIcon></AppsIcon></span>
        <span><AccountCircleIcon src={photoURL}></AccountCircleIcon></span>
       </div>

       </div>

    </div>
    </>
  )
}

export default Header
