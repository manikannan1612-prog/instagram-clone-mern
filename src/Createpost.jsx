import React from 'react'

function Createpost() {
  return (
    <div><input type="text" 
                   name='profile_pic'
                   value={profile.user.profile_pic}
                   className='form-conrol w-100 my-4'
                   onChange={handlepost}
                   
            />
            <button className='btn btn-primary my-4'
            onClick={handlePost}>
                post

            </button>
    </div>
  )
}

export default Createpost