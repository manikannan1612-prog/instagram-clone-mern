import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {
  const [Stories,setStories]=useState([]);
  const navigate=useNavigate();
   let tot=0;

   useEffect(()=>{
    fetch('http://localhost:3000/story')
    .then((data)=>data.json())
    .then(data=>setStories(data))
    .catch(err=>console.log(err))
  },[]);
  return (
    <div className ='story d-flex m-1'>
      <div className='d-none'>  {tot=Stories.length}   </div>
      {Stories.length >0?(

        Stories.map((story)=>(
          <div key={story.id} onClick={()=>{
            navigate(`/story/${story.id}/${tot}`)
          }}>
            <div className='gradient-border'>
          <img src={story.user.profile_pic} className='story-dp rounded-circle ' ></img>
          </div>
          <p className='storyuser text-truncate' style={{width:"50px"}}>{story.user.username}</p>
          </div>
        ))
      ):(
        <div>
          loading story
          </div>

      )}
    </div>
    
  )  
}

export default Stories