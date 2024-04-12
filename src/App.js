

import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import { auth, provider } from './firebase';
import { useState } from 'react';

function App() {
  const[user,setUser] = useState(null);

  const signIn = ()=>{
    auth.signInWithPopup(provider).then((user)=>{
      setUser(user)
    }).catch(error=>{
      alert(error.message)
    })
  }
  return (
   <>
   {
    user ? (
      <>
      <Header photoURL={user.photoURL}></Header>
   <div style={{display:'flex'}}>
   <Sidebar></Sidebar>
   <Home></Home>
   </div>
      </>
    ) : (
      <>
      <div >
      <div className='home-main-div'>
        <div style={{display:"flex",padding:"10px 10%",alignItems:"center",justifyContent:"space-between"}}> 
         <div style={{display:"flex",alignItems:"center",gap:'10px'}}>
         <img src='https://tse1.mm.bing.net/th?id=OIP.lgdmCc6UHAWc27h0o4tSbwHaHa&pid=Api&rs=1&c=1&qlt=95&w=107&h=107' alt='google_drive_logo' width='40px' style={{backgroundColor:"rgb(179, 234, 232)",color:"rgb(179, 234, 232)",borderRadius:"50%"}}></img>
         <h3>Disk</h3>
         </div>
         <div>
          <button onClick={signIn} style={{padding:"10px 40px",borderRadius:"10px",backgroundColor:"rgba(9, 82, 239, 1)",color:"white",border:'none',cursor:"pointer"}}>Log in</button>
         </div>
        </div>
      </div>

      <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",padding:"10px 0px"}}>
        <div style={{width:"40%",padding:"5% 5%",display:'flex',flexDirection:"column",gap:"20px",justifyContent:"center"}}>
             <h1 style={{textAlign:"center",fontStyle:"italic",fontSize:'2.5rem'}}>Easy and secure access to your content</h1>
             <p style={{textAlign:"center",fontStyle:"oblique",fontSize:'1rem'}}>Store, share, and collaborate on files and folders from your mobile device, tablet, or computer</p>
             <button onClick={signIn} style={{padding:"10px 40px",borderRadius:"10px",backgroundColor:"rgba(9, 82, 239, 1)",color:"white",border:'none',width:"150px",margin:'20px 20px',cursor:"pointer"}}>Log in</button>
        </div>
        <div>
          <img src='https://gdisk.vercel.app/landing-splash.jpg' alt='' width='700px' height='450px' style={{borderRadius:"10px"}}></img>
        </div>
      </div>
      </div>
      </>
    )
   }
   
   
   </>
  );
}

export default App;
