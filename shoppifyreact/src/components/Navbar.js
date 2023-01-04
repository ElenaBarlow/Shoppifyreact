import React, { useState } from "react";
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import images from './images';
import SearchBar from "./SearchBar"; 
import {UserAuth} from '../context/AuthContext'
import Profile from "./Profile";
import Dropdown3 from "./Dropdown3";
// import Tooltip from "react-tooltip";


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  }; 

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }; 

  const [dropdown2, setDropdown2] = useState(false);
  
  const onMouseEnter2 = () => {
    if(window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  }; 

  const onMouseLeave2 = () => {
    if(window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  }; 

  const {user, logOut} = UserAuth() 

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <nav className="navbar">
     
     
      <div className="logo-select">
      <Link to='/home' className="navbar-logo">
        <img src={images.shoppify} alt="app-logo" />
      </Link>
      <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <div className="nav-links" onClick={closeMobileMenu}>
            Select your country <i className="fas fa-caret-down" />
          </div>
          {dropdown && <Dropdown />}
        </li>
      </div>
    

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div> 
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
     
      <div className="search-language">
        <SearchBar className='search' placeholder="What are you looking for?..." />
        <li className="nav-item2" onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
          <div className="nav-links2" onClick={closeMobileMenu}>
            Language
          </div>
          {dropdown2 && <Dropdown2 />}
        </li>
      </div>

        <div className="message-alert">
          <i className="fa-solid fa-comment"  data-tip data-for="messagenotif" />
          <i className="fa-solid fa-bell" data-tip data-for="alertnotif"/>
        
          {/* <Tooltip id="messagenotif" place="bottom" effect="solid">
            Login to see messages
          </Tooltip>
          
          <Tooltip id="alertnotif" place="bottom" effect="solid">
            Login to see alerts
          </Tooltip> */}
        
        </div>
    
        <li className="nav-item">
          <Link to='/log-in' className="nav-links-mobile" onClick={closeMobileMenu}>
            Log In
          </Link>
        </li>
      </ul> 

      <a className="sell" href="/sell">
        <span></span>
        <span></span>
        <span></span>
        <span></span><i className="fa-regular fa-plus" />Sell
      </a>
      
      
      {user?.displayName ? <Dropdown3 /> && <button className="logout" onClick={handleSignOut}>Logout</button> : <Button />} 
    
    </nav>
 );
}
export default Navbar;