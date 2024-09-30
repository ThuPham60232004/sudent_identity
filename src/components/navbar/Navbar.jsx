
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './navbar.css';
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaBarsStaggered } from "react-icons/fa6";


const Navbar = () => {
  const [showDropdownCreate, setShowDropdownCreate] = useState(false);
  const [showDropdownExplore, setShowDropdownExplore] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo_navbar">
          <img src="./img/collection.png" alt="" />
          <div className="navbar-logo">FINTECH</div>
        </div>

        <div className="menu_navbar">
          {/* Desktop Create Menu Item */}
          <div className="navbar-item-wrapper">
            <div
              className="navbar-item"
              onMouseEnter={() => setShowDropdownCreate(true)}
              onMouseLeave={() => setShowDropdownCreate(true)}
            >
             
              Create
               <RiArrowDropDownFill size={30}/>
            </div>
            {showDropdownCreate && (
              <div
                className="dropdown"
                onMouseEnter={() => setShowDropdownCreate(true)}
                onMouseLeave={() => setShowDropdownCreate(false)}
              >
                <a href="#">NFT</a>
                <a href="#">Collection</a>
                <a href="#">My Profile</a>
              </div>
            )}
          </div>

          {/* Desktop Explore Menu Item */}
          <div className="navbar-item-wrapper">
            <div
              className="navbar-item"
              onMouseEnter={() => setShowDropdownExplore(true)}
              onMouseLeave={() => setShowDropdownExplore(true)}
            >
              Explore
               <RiArrowDropDownFill size={30}/>
            </div>
            {showDropdownExplore && (
              <div
                className="dropdown"
                onMouseEnter={() => setShowDropdownExplore(true)}
                onMouseLeave={() => setShowDropdownExplore(false)}
              >
                <a href="#">All NFTs</a>
                <a href="#">All Collections</a>
                <a href="#">Categories</a>
              </div>
            )}
          </div>

          {/* Desktop Menu Items */}
          <div className="navbar-item"><a href="">About</a></div>
          <div className="navbar-item"><a href="">Contact Us</a></div>
        </div>
      </div>

      <button className="connect-wallet-btn"><a href="">Connect Wallet</a></button>
      <FaBarsStaggered className="icon_navbar-bars" onClick={toggleMobileMenu} />

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="mobile-menu">
          {/* Mobile Create Menu Item */}
          <div
            className="mobile-menu-item"
            onClick={() => setShowDropdownCreate(!showDropdownCreate)}
          >
            <a href="#">Create</a>
            <RiArrowDropDownFill className='icon_dropdown_fill'/>
            
          </div>
          {showDropdownCreate && (
            <div className="mobile-dropdown">
               <div className="mobile_dropdown_box">
                 <FaPlus className='icon_mobile_dropdown'/>
                <a href="#">NFT</a>
              </div>
               <div className="mobile_dropdown_box">
                 <FaPlus className='icon_mobile_dropdown'/>
                <a href="#">Collection</a>
              </div>
               <div className="mobile_dropdown_box">
                 <FaPlus className='icon_mobile_dropdown'/>
                <a href="#">My profile</a>
              </div>
              
            </div>
          )}

          {/* Mobile Explore Menu Item */}
          <div
            className="mobile-menu-item"
            onClick={() => setShowDropdownExplore(!showDropdownExplore)}
          >
            <a href="#">Explore</a>
            <RiArrowDropDownFill className='icon_dropdown_fill'/>
            
          </div>
          {showDropdownExplore && (
            <div className="mobile-dropdown">
              <div className="mobile_dropdown_box">
                 <FaPlus className='icon_mobile_dropdown'/>
                <a href="#">All NFTs</a>
              </div>
           
           <div className="mobile_dropdown_box">
                 <FaPlus className='icon_mobile_dropdown'/>
                  <a href="#">All Collections</a>
              </div>
              <div className="mobile_dropdown_box">
                 <FaPlus className='icon_mobile_dropdown'/>
              <a href="#">Categories</a>
              </div>
        
            </div>
          )}
          <div className="mobile-menu-item">
            <a href="#" className='item_normal'>About</a> 
          </div>
          <div className="mobile-menu-item">
            <a href="#"className='item_normal'>Contact Us</a>   
          </div>
        <div className="mobile-menu-item">
          <a href="#" className='item_normal'>Connect Wallet</a>
        </div>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
