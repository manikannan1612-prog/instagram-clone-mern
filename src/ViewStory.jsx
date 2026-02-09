import React, { useEffect, useState } from 'react'
import { useParams,Link, useNavigate} from 'react-router-dom'

function ViewStory() {

    const {id }=useParams();

    const [story,setStory]=useState([]);

    const navigate=useNavigate();

    
    useEffect(()=>{
        fetch(`http://localhost:8000/stories`)
        .then(data=>data.json())
        .then(data=>setStory(data))
        .catch(err=>console.log(err))
    },[id]);
    const currentStory = story[Number(id)];

    if(Number(id)>=story.length||Number(id)<0){

        navigate('/');

    }
  return (
    <div>   

        {currentStory?<div className='d-flex justify-content-center align-items-center'>
            <Link to={`http://localhost:5173/story/${Number(id)-1}`}> <i className="bi bi-arrow-left-circle-fill"></i>   </Link>
            <img className='vh-100' src={currentStory.image} alt="" />
            <Link to={`http://localhost:5173/story/${Number(id)+1}`}> <i className="bi bi-arrow-right-circle-fill icon"></i>  </Link>
        </div> : <div>loading </div>}
    </div>
    
  )
}

export default ViewStory