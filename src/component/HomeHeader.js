import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import InfoIcon from '@mui/icons-material/Info';
import "../component_css/homeHeaderStyle.css"

function HomeHeader() {
  return (
    <>
    <div className='home_header_div'>
        <div style={{display:"flex"}}>
           <p>My Drive</p>
          <ArrowDropDownIcon></ArrowDropDownIcon>
        </div>

        <div style={{display:"flex",gap:'20px'}}>
           <p><FormatListBulletedIcon></FormatListBulletedIcon></p>
           <InfoIcon></InfoIcon>
        </div>
    </div>
    </>
  )
}

export default HomeHeader
