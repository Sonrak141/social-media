import React from 'react'
import './FollowersCard.css'
import { followers } from '../Mock/Followers'

const FollowersCard = () => {
  return (
    <div className="FollowerCard">
        <h3>Who is following you</h3>

        {followers.map((followers, id) => {
            return(
                <div className="follower">
                    <div>
                        <img src={followers.img} alt="" className='followersImg'/>
                        <div className="names">
                            <span>{followers.name}</span>
                            <span>@{followers.usename}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard