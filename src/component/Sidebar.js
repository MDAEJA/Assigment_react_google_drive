import React, { useState } from 'react'
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';
import DevicesIcon from '@mui/icons-material/Devices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloudIcon from '@mui/icons-material/Cloud';
import { Block } from '@mui/icons-material';
import Modal from '@mui/material/Modal';
import { db, store } from '../firebase';
import firebase from 'firebase';


function Sidebar() {
    const[open,setOpen] = useState(false);
    const[uploading,setUploading] =  useState(false);
    const[file,setFile] = useState(null);

    const handleClose = ()=>{
        setOpen(false);
    }
    const handleOpen = ()=>{
      setOpen(true);
    }
    const  handleChange = (e)=>{
       if(e.target.files[0]){
          setFile(e.target.files[0]);
       }
    }
    const handlerClick = (event)=>{
     event.preventDefault();
     setUploading(true);
     
     store.ref(`files/${file.name}`).put(file).then(snapshot=>{
        console.log(snapshot);
        store.ref("files").child(file.name).getDownloadURL().then(url=>{
            db.collection("myfiles").add({
                timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                filename : file.name,
                fileURL : url,
                filesize : snapshot._delegate.bytesTransferred
            })
            setUploading(false);
            setFile(null);
            setOpen(false);

        })
     })

    //  console.log(file);

    
    }
  return (
    
    <>

    <Modal open={open} onClose={handleClose}>
        <div className='modal_pop'>
            <form>
                <div className='modalHeading'>
                   <h3>Select file you want to upload</h3>
                </div>

                <div className='modalBody'>
                    
                   <div style={{padding:'5px 5px',backgroundColor:'grey',display:"flex",alignItems:"center",justifyItems:'center',width:'200px',margin:"10px auto",borderRadius:'5px'}}>
                    <input type='file'onChange={handleChange} ></input>
                    </div> 

                   {
                        uploading ? (<p className='uploading'>File is Uploading...</p>) : (
                            <input type='submit' className='post_submit' onClick={handlerClick}></input>
                        )
                    }
                    
                </div>
            </form>
        </div>
    </Modal>


    
    

    <div className='sidebar-div'>
        <button className='button-style' style={{cursor:"pointer"}} onClick={handleOpen}>
            <img src='https://cdn-icons-png.flaticon.com/128/7030/7030517.png' width='20px' alt='add-new'></img>
          <span>New</span>  
        </button>


{/*  background-color: whitesmoke;
    border-radius: 0px 20px 20px 0px;
    padding: 5px 10px;
    color: blue;
    cursor: pointer; */}
        <div className='my-devices' style={{backgroundColor:'whitesmoke',borderRadius:"0px 20px 20px 0px",padding:"5px 10px",color:"red",cursor:"pointer"}}>
            <span><DeviceUnknownIcon></DeviceUnknownIcon></span>
            <span>My Device</span>
        </div>

        <div className='my-devices'>
            <span><DevicesIcon></DevicesIcon></span>
            <span>Computers</span>
        </div>

        <div className='my-devices'>
            <span><PeopleAltIcon></PeopleAltIcon></span>
            <span>Shared with me</span>
        </div>

        <div className='my-devices'>
            <span><AccessTimeIcon></AccessTimeIcon></span>
            <span>Recent</span>
        </div>

        <div className='my-devices'>
            <span><StarBorderIcon></StarBorderIcon></span>
            <span>starred</span>
        </div>

        <div className='my-devices'>
            <span><DeleteOutlineIcon></DeleteOutlineIcon></span>
            <span>Trash</span>
        </div>
        <hr></hr>
        <div className='my-devices'>
            <span><CloudIcon></CloudIcon></span>
            <span>Strorage</span>
        </div>
        <div style={{display:'flex' ,flexDirection:'column'}}>
            <progress size="tiny" value='50' max='100'></progress>
            <span>6.45 GB of 15 GB used</span>
        </div>
    </div>
    </>
  )
}

export default Sidebar
