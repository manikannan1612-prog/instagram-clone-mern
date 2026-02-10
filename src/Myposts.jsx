import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Newpost from './Newpost'
import { Navigate, useNavigate } from 'react-router-dom'


function Myposts() {
    const [myposts, setMyposts] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/Posts')
            .then(res => setMyposts(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-6"> 
                    {myposts ? (
                        myposts.filter(mypost => mypost.user?.username === "manikannan").map(mypost => (
                            <div key={mypost._id} className="card my-4 shadow-sm">
                                <div className="p-3 d-flex align-items-center">
                                    <img src={mypost.user?.profile_pic} className="rounded-circle" width="40" height="40" />
                                    <b className="ms-2">{mypost.user?.username}</b>
                                </div>

                                <img src={mypost.image} className="w-100" style={{maxHeight: "500px", objectFit: "cover"}} />

                                <div className="p-3">
                                    <p> {mypost.caption}</p>
                                    <button className="btn btn-primary w-100" onClick={() => navigate('/newposts')}>
                                        Add New Post
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center mt-5">Loading...</p>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Myposts