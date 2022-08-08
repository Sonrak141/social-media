import React from 'react'
import "./Home.css"
import Profile from '../../components/profileSide/Profile'
import PostSide from '../../components/postSide/PostSide'
const Home = () => {
  return (
    <div className="Home">
        <div className="profileSide"><Profile/></div>
        <div className="postSide"><PostSide/></div>
        <div className="rightSide">Right </div>
    </div>
  )
}

export default Home