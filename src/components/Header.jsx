import React from 'react'
import PropTypes from 'prop-types';
import { FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <GiHamburgerMenu className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <button type="submit"><FaSearch className="searchIcon"/></button>
            <input type="text" placeholder="Search.." name="search"/>
        </div>
        <div className='header-right'> 
            <FaEnvelope className='icon'/>
            <IoMdSettings className='icon'/>
            <IoNotifications className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  );
}
Header.propTypes = {
    OpenSidebar: PropTypes.func.isRequired,
  };

export default Header
