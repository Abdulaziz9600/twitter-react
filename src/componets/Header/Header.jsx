import React from 'react';
import Logo from '../../assets/twitter-logo.svg'
import Home from '../../assets/home.svg'
import Explore from '../../assets/explore.svg'
import Notification from '../../assets/notification.svg'
import Messages from '../../assets/messages.svg'
import Bookmarks from '../../assets/bookmarks.svg'
import Lists from '../../assets/lists.svg'
import Profile from '../../assets/profile.svg'
import More from '../../assets/more.svg'
import { NavLink } from 'react-router-dom';

import './Header.css'
const Header = () => {
  return (
    <>
      <header>
        <div className='twitter-header container pt-4 line'>

          <div  className='d-flex align-items-center justify-content-between'>
            <img src={Logo} alt="" />
           <NavLink to='/'><button className='btn btn-primary '>log Out</button></NavLink> 
          </div>
          <nav className='pt-3 pb-5'>
            <ul className='twitter-list d-flex flex-column gap-5 pt-5 list-unstyled'>
            <NavLink className={({isActive})=>  isActive ? "active text-decoration-none" : "text-decoration-none"} to='/'> <li className='d-flex gap-4 link-activ'> <img src={Home} alt="" />Home </li> </NavLink>
            <NavLink className={({isActive})=>  isActive ? "active text-decoration-none" : "text-decoration-none"} to='/Section'> <li className='d-flex gap-4'> <img src={Explore} alt="" /> Explore </li></NavLink>
              <li className='d-flex gap-4'> <img src={Notification} alt="" /> Notifications</li>
              <li className='d-flex gap-4'> <img src={Messages} alt="" /> Messages</li>
              <li className='d-flex gap-4'> <img src={Bookmarks} alt="" /> Bookmarks</li>
              <li className='d-flex gap-4'> <img src={Lists} alt="" /> Lists</li>
              <li className='d-flex gap-4'> <img src={Profile} alt="" /> Profile</li>
              <li className='d-flex gap-4'> <img src={More} alt="" /> More</li>
            </ul>
          </nav>

          <button className='btn-twitter'>Tweet</button>
        </div>


      </header>

    </>
  );
};

export default Header;