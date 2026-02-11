import axios from 'axios';
import React from 'react'
import { useState ,useEffect} from 'react';

function Messages() {
    const [messages ,setMessages] =useState([]);

useEffect(()=>{
    axios.get('"https://instagram-clone-mern-3cy5qaj8x-manikannan1612-progs-projects.vercel.app/messages')
    .then(data=>setMessages(data.data))
    .catch(err=>console.log(err))
},[])

    
  return (
    <div>
    {messages.length > 0? (
        <div>
          {
            messages.map((message) => (
  <div key={message.id} className="msg">
    <img className="avatar" src={message.profile_pic} alt="" />
    <div className="content">
      <div className="header">{message.username}</div>
      <div className="bubble">{message.text}</div>
    </div>
  </div>
))

           
          }
        </div>
      ):(
        <div>
          loading Posts 
        </div>
      )}
    </div>
    
  
  )

}

export default Messages