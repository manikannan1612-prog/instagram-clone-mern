import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Sidebar() {
  const navigate=useNavigate();

  const [logoUrl, setLogoUrl] = useState("");
  useEffect(()=>{
    fetch('/api/logo')
    .then(res=>res.json())
    .then(data=>setLogoUrl(data.logoUrl))
    .catch(err=>console.log(err));
  } ,[])
  return (
    <>
    <div className='position-fixed'>
    <div className='d-flex flex-column gap-3 m-3'>
        <div >
          {logoUrl?(
          
          <img className= "logotext" src={logoUrl} alt='instagram'></img>
          ):(
            
            <span className='logotext'>instagram</span>
        )
          
          } 
          </div>
    <div onClick={()=>{ window.location.href = '/' }} 
  style={{ cursor: 'pointer' }}> <i className="bi bi-house-door"></i>Home</div>
    <div><i className="bi bi-search"></i>Search</div>
    <a href="https://www.instagram.com/https:/explore/" 
   target="_blank" 
   className="text-decoration-none text-reset"><i className="bi bi-compass"></i>Explore</a>
    <a href="https://www.instagram.com/https:/reels/" 
   target="_blank" 
   className="text-decoration-none text-reset"><i className="bi bi-camera-reels-fill"></i>Reels</a>
    <div onClick={()=>{navigate('/messages')}}><i className="bi bi-chat-dots"></i>Message</div>
    <div><i className="bi bi-bell-fill"></i>Notification</div>
    <div onClick={()=>{navigate('/myposts')}}><i className="bi bi-plus-square"></i>Create</div>
    <div onClick={()=>{navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
    </div>
    </div>

    <div className='position-fixed bottom-0 d-flex flex-column gap-3 m-3'>
        <a className= "text-decoration-none text-reset" href='https://www.threads.com/'target='blank'><i className="bi bi-threads"></i>Threads</a>
        <div><i className="bi bi-list-ul"></i>More</div>
    </div>

    
    
    </>
    
    
  )
}

export default Sidebar