import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {
  const [Stories,setStories]=useState([]);
  const navigate=useNavigate();
   

   useEffect(()=>{
    fetch('https://instagram-clone-mern-chi.vercel.app/stories')
    .then((data)=>data.json())
    .then(data=>setStories(data))
    .catch(err=>console.log(err))
  },[]);
  return (
    <div className ='story d-flex m-1'>
      <div className='d-none'>    </div>
      {Stories.length >0?(

        Stories.map((story,index)=>(
          <div key={story.id} onClick={()=>{
            navigate(`/story/${index}`)
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