import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import ProfileCard from '../ProfileCard/ProfileCard'
import Search from '../Search/Search'
import './Profile.css'

const Profile = () => {
  return (
    <div className="ProfileSide">
        <Search/>
        <ProfileCard/>
        <FollowersCard/>
    </div>
  )
}

export default Profile