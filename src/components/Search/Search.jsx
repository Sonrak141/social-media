import React from 'react'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './Search.css'

const Search = () => {
  return (
    <div className="Search">
        <img src={Logo} alt="" />
        <div className="Input">
            <input type="text" placeholder='#Explore'/>
            <div className="s-icon">
                 <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default Search