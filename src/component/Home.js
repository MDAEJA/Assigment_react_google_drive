import React, { useEffect, useState } from 'react'
import "../component_css/homeStyle.css"
import HomeHeader from './HomeHeader'
import FileCopyIcon from '@mui/icons-material/FileCopy';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { db } from '../firebase';

function Home() {
  const[files,setFiles] = useState([]);
  useEffect(()=>{
    db.collection("myfiles").onSnapshot(snapshot=>{
      setFiles(snapshot.docs.map(doc=>({
        id : doc.id,
        data:doc.data()
      })))
    })
  },[])

  function formatBytes(bytes,decimals = 2){
    if(bytes === 0) return '0 bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes','KB','MB','GB','TB','PB','ZB','YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k,i)).toFixed(dm)) + ' ' + sizes[i];
  }
  return (
    <>
    <div>
      <HomeHeader></HomeHeader>
       
       <div className='data_contain'>
        <div className='data-inner-div'>
          {
            files.map((item)=>{
              return <div className='data_file'>
              {/* <FileCopyIcon ></FileCopyIcon> */}
              <img src={item.data.fileURL} width='50px' height='50px'></img>
                <p>
                  <a href={item.data.fileURL}> {item.data.filename}</a>
                
                </p>
              </div>
            })
          }
          
        </div>
       </div>
      

      <div className='data-show'>
         <div style={{margin:'20px 0px' ,borderBottom:'2px solid black',padding:'10px 0px',fontWeight:"bold"}}>
         <ul style={{display:'flex',alignItems:'center',listStyle:'none',gap:"250px",}}>
          <li style={{display:'flex',alignItems:'center'}}>Name <span ><FileDownloadOutlinedIcon ></FileDownloadOutlinedIcon></span></li>
          <li >Owner</li>
          <li> Last Modified</li>
          <li>File Size</li>
        </ul>
         </div>
        
        
      </div>

      {/*  */}
       <div className='data-showing-div'> 

      <div className='data-show'>
        {
          files.map((item)=>{
           return  <div style={{margin:'5px 0px' ,borderBottom:'2px solid lightGray',fontWeight:""}}>
         <ul style={{display:'flex',alignItems:'center',listStyle:'none',margin:'10px 10px',gap:"150px",justifyContent:"space-between"}}>
        
          <li style={{display:'flex',alignItems:'center',gap:'10px',textDecoration:''}}><span><FileCopyIcon></FileCopyIcon></span> <p><a style={{textDecoration:'none' ,color:'red'}} href={item.data.fileURL}>{item.data.filename}</a></p></li>
          
          {/* <li style={{display:'flex',alignItems:'center'}}>Name <span ><FileDownloadOutlinedIcon ></FileDownloadOutlinedIcon></span></li> */}
          <li >Owner</li>
          <li >{new Date(item.data.timestamp?.seconds*1000).toUTCString()}</li>
          <li >{ formatBytes(item.data.filesize)}</li>
        </ul>
         </div>
          })
        }
         
      </div>

      </div>

    </div>
    </>
  )
}

export default Home

