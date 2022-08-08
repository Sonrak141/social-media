import React from 'react'
import './PostShare.css'
import ProfileImg from '../../img/profileImg.jpg'

const PostShare = () => {
  return (
    <div className="PostShare">
        <img src={ProfileImg} alt="profileImg" className="profileImg"/>
    </div>
  )
}

export default PostShare