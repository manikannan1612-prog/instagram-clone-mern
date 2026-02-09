import React, { useState ,useEffect} from 'react'
import axios from 'axios';

function Newpost() {
    
    const[postings,setPostings]=useState({username:'',profile_pic:'',image:'',caption:''});
    



   const handleNewpost=async()=>{
    const finalData = {
      user:{
        username: postings.username,
        profile_pic: postings.profile_pic
        
      },
           image: postings.image,
            caption: postings.caption
    };


    axios.post('http://localhost:8000/posts',finalData)
        .then(data=>setPostings(data.data))
        .catch(err=>console.log(err))
    

   }
   
   const handleChange = (e) => {
    setPostings({
      ...postings,
      [e.target.name]: e.target.value
    });
  };

   

    
  return (
    <div>
    {postings ?(

    
    <div>
        <input type="text" 
                   value={postings.username}
                   name='username'
                   placeholder='username'
                   className='form-control w-100 my-4 '
                   onChange={handleChange}
            />
            <input type="text" 
                   name='profile_pic'
                   placeholder='profile_picurl'
                   value={postings.profile_pic}
                   className='form-control w-100 my-4'
                   onChange={handleChange}
                   />
           <input type="text" 
                   value={postings.image}
                   name='image'
                   placeholder='post_image_url'
                   className='form-control w-100 my-4 '
                   onChange={handleChange}
            />
            <input type="text" 
                   name='caption'
                   placeholder='captoin_for post'
                   value={postings.caption}
                   className='form-control w-100 my-4'
                   onChange={handleChange}
                   />







                   <button className='btn btn-primary my-4'
            onClick={handleNewpost}>
                Post

            </button>
            </div>

    ):(
        <div>loading</div>
    ) }  
   </div>

  );
} 



export default Newpost
