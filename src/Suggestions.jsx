import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'

function Suggestions() {
  const [profile,setProfile]=useState(null);
  const [suggestions,setSuggestions]=useState([]);

useEffect(()=>{
  fetch('/Profile')
  .then(data=>data.json())
  .then(data=>setProfile(data))
  .catch(err=>console.log(err))

  fetch('/suggestions')
  .then(data=>data.json())
  .then(data=>setSuggestions(data))
  .catch(err=>console.log(err))


  },[]);

  const handleFollow=async (id,username,profile_pic)=>{
    axios.post('/followers',{"_id":id,"username":username,"profile_pic":profile_pic})
    .then(alert('followed'))
    .catch(err=>console.log(err))
  }
  
  return (
    <div>
      <div className='w-75'>
      {profile ? 
       <div className= ' my-3'key={profile._id}>
                <div className='d-flex'>
                <img className = "dp3 rounded-circle" src= {profile.user.profile_pic} alt='profile'/>
                <h5 className='profs'>{profile.user.username}</h5>
                
                <h5 className='ms-auto text-primary'>Switch</h5>
                </div>
    </div>
    : <p>loading</p>}
    <div className=' see d-flex'>
      <p className='sug'> suggested for you</p>
      <b className='ms-auto'>See All</b>
    </div>
    {suggestions.length>0 ? (
        <div>
          {
            suggestions.map((suggestion)=>(
              <div key={suggestion._id}>
                <div className='suggestions d-flex'>
                <img className = "dp3 rounded-circle" src={suggestion.profile_pic}/>
                <h5 className='prof1 '>{suggestion.username}</h5>
                <a className='ms-auto text-primary'onClick={()=>handleFollow(suggestion._id,suggestion.username,suggestion.profile_pic)}>Follow</a>
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
    </div>
  )
}

export default Suggestions