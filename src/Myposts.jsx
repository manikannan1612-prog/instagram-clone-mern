import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Newpost from './Newpost'
import { Navigate, useNavigate } from 'react-router-dom'


function Myposts() {
    const [myposts, setMyposts] = useState(null)
    const Navigate=useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/mypost')
            .then(data => setMyposts(data.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="insta-app">
            {myposts ? (
                myposts.map((mypost) =>
                    <div key={mypost.id} className="profile-container">
                        
                        <h1 className="header-hidden">myprofile</h1>
                        <img className='profile-avatar d-flex' src={mypost.profile_pic} alt="" />
                        
                        <h1 className="header-hidden">myposts</h1>
                        <img className="post-preview-hidden" src={mypost.mypostdet[0].imageUrl} alt="image" />
                        <h6 className="caption-hidden">{mypost.mypostdet[0].caption}</h6>
                        
                        <div className="card-center-wrapper">
                            <div className="card insta-card" style={{ width: "18rem" }}>
                                
                                <div className="card-header-custom">
                                    <img className="tiny-avatar" src={mypost.profile_pic} alt="user" />
                                    <span className="username-text">{mypost.username}</span>
                                </div>

                                <img
                                    src={mypost.mypostdet[0].imageUrl}
                                    className="card-img-top"
                                    alt="post"
                                />

                                <div className="card-body">
                                    <div className="action-icons">
                                        <span>♡</span> <span>💬</span> <span>➢</span>
                                    </div>
                                    <h5 className="card-title hidden-title">{mypost.username}</h5>
                                    <p className="card-text">
                                         {mypost.mypostdet[0].caption}
                                    </p>
                                    <a href="#" className="btn btn-primary insta-btn" onClick={()=>{Navigate('/newposts')}}>Add New Post</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            ) : (
                <div className="loading-text">loading myposts</div>
            )}
        </div>
    )
}

export default Myposts