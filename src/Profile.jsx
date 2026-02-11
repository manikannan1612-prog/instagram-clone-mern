import React, { useState,useEffect } from 'react'
import axios from 'axios'


function Profile() {

    const [profile,setProfile]=useState(null);

    const[followers,setFollowers]=useState([]);

    const [unfollowed,setUnfollowed]=useState([]);


    useEffect(()=>{
        axios.get('"https://instagram-clone-mern-3cy5qaj8x-manikannan1612-progs-projects.vercel.app/Profile')
        .then(data=>setProfile(data.data))


        axios.get('"https://instagram-clone-mern-3cy5qaj8x-manikannan1612-progs-projects.vercel.app/followers')
    .then(data=>setFollowers(data.data))
    .catch(err=>console.log(err))

    },[unfollowed])

    

    function HandleOnChange(e){
        setProfile(prev=>( {
            ...prev,
            user:{
            ...prev.user,
            [e.target.name]:[e.target.value]
            }
        }))
     }
     const handleUpdate=async ()=>{
        axios.put('"https://instagram-clone-mern-3cy5qaj8x-manikannan1612-progs-projects.vercel.app/Profile',profile)
        .then(alert("updated"))
        .catch(err=>console.log(err))
     }

     const handleUnfollow=async (_id)=>{
        axios.delete(`"https://instagram-clone-mern-3cy5qaj8x-manikannan1612-progs-projects.vercel.app/followers/${_id}`)
        .then(alert("unfollowed"))
        .then(setUnfollowed(!unfollowed))
        .catch(err=>console.log(err))


     }
  return (
    <div className='m-5'>
    {profile ?(
        <div> 
            <img src={profile.user.profile_pic} className='profile2 rounded-circle'  />
            <h5>{profile.user.username}</h5>

            <input type="text" 
                   value={profile.user.username}
                   name='username'
                   className='form-control w-100 my-4 '
                   onChange={HandleOnChange}
            />
            <input type="text" 
                   name='profile_pic'
                   value={profile.user.profile_pic}
                   className='form-conrol w-100 my-4'
                   onChange={HandleOnChange}
                   
            />
            
            <button className='btn btn-primary my-4'
            onClick={handleUpdate}>
                Update

            </button>
            

        
        </div>       


    ):(

    <div>loading</div>
  )}

  {followers.length>0?(
    followers.map(follower=>(
        <div className='d-flex my-3' key={follower._id}>
            {follower.username}
            <button className='btn btn-secondary ms-auto' onClick={()=>handleUnfollow(follower._id)}> Un follow</button>

        </div>
    ))

  ):(
    <div>loading Followers</div>
  )}
  </div>
  )
  
}

export default Profile