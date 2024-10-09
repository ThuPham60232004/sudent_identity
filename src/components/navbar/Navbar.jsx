import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import './navbar.css';
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaBarsStaggered } from "react-icons/fa6";
import WalletModal from '../WalletModal/WalletModal';
import WalletDetailLogin from '../WalletDetailLogin/WalletDetailLogin';
import { ethers, formatEther } from 'ethers'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdownCreate, setShowDropdownCreate] = useState(false);
  const [showDropdownExplore, setShowDropdownExplore] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null); 
  const [walletBalance, setWalletBalance] = useState(null);
  const [chainName, setChainName] = useState(null); 
  const [openWalletDetailModal, setOpenWalletDetailModal] = useState(false);

  useEffect(() => {
    const savedAddress = localStorage.getItem("walletAddress");
    if (savedAddress) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      handleWalletConnect(savedAddress, provider);
    }
  }, []);
  
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpenWalletDetail = () => {
    setOpenWalletDetailModal(true);
  };

  const handleWalletConnect = async (address, provider) => {
    setWalletAddress(address);  
    localStorage.setItem("walletAddress", address);
    
    try {
        const balance = await provider.getBalance(address);
        const formattedBalance = formatEther(balance); 
        setWalletBalance(formattedBalance); 

        const network = await provider.getNetwork();
        setChainName(network.name);
    } catch (error) {
        console.error("Error fetching balance or network:", error);
    }
  
    setOpenModal(false); 
  };

  const handleWalletDisconnect = () => {
    localStorage.removeItem("walletAddress");
    setWalletAddress(null);
    setWalletBalance(null);
    setChainName(null);
    setOpenWalletDetailModal(false); 
  };

  const handleMouseEnterCreate = () => {
    setTimeout(() => setShowDropdownCreate(true), 200); 
  };

  const handleMouseLeaveCreate = () => {
    setTimeout(() => setShowDropdownCreate(false), 1000); 
  };

  const handleMouseEnterExplore = () => {
    setTimeout(() => setShowDropdownExplore(true), 200);
  };

  const handleMouseLeaveExplore = () => {
    setTimeout(() => setShowDropdownExplore(false), 1000); 
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo_navbar">
          <img src="./img/collection.png" alt="" />
          <div className="navbar-logo">FINTECH</div>
        </div>

        <div className="menu_navbar">
        <div className="navbar-item"><Link to='/'>Home</Link></div>
          <div className="navbar-item-wrapper">
            <div
              className="navbar-item"
              onMouseEnter={handleMouseEnterCreate}
              onMouseLeave={handleMouseLeaveCreate}
            >
              Create
              <RiArrowDropDownFill size={30}/>
            </div>
            {showDropdownCreate && (
              <div className="dropdown">
                <Link to='/CreatePage'>NFT & Collection</Link>
                <Link to='/Profile'>My Profile</Link>
              </div>
            )}
          </div>

          <div className="navbar-item-wrapper">
          
            <div
              className="navbar-item"
              onMouseEnter={handleMouseEnterExplore}
              onMouseLeave={handleMouseLeaveExplore}
            >
              Explore
              <RiArrowDropDownFill size={30}/>
            </div>
            {showDropdownExplore && (
              <div className="dropdown">
                <Link to='/'>All NFTs</Link>
                <Link to=''>All Collections</Link>
                <Link to='/Dashboard'>Dashboard</Link>
                <Link to='/Subscription'>Subscription</Link>
              </div>
            )}
          </div>

          <div className="navbar-item"><Link to=''>About</Link></div>
          <div className="navbar-item"><Link to='/ContactUs'>Contact Us</Link></div>
        </div>

        {walletAddress ? (
          <div className="wallet-info" onClick={handleOpenWalletDetail}>
            <div className="wallet-address">
              {`${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}`}
            </div>
            <div className="wallet-balance">
              {walletBalance ? `${walletBalance} ETH` : "Loading..."}
            </div>
            <div className="chain-name">
              {chainName ? chainName : "Unknown Chain"}
            </div>
          </div>
        ) : (
          <button className="connect-wallet-btn" onClick={handleClick}>
            Connect Wallet
          </button>
        )}

        {openModal && <WalletModal onClose={handleClose} onConnect={handleWalletConnect} />}
        {openWalletDetailModal && <WalletDetailLogin onClose={() => setOpenWalletDetailModal(false)} onDisconnect={handleWalletDisconnect} />}

        <FaBarsStaggered className="icon_navbar-bars" onClick={toggleMobileMenu} />

        {showMobileMenu && (
          <div className="mobile-menu">
            <div className="mobile-menu-item" onClick={() => setShowDropdownCreate(!showDropdownCreate)}>
              <a href="#">Create</a>
              <RiArrowDropDownFill className='icon_dropdown_fill'/>
            </div>
            {showDropdownCreate && (
              <div className="mobile-dropdown">
                <div className="mobile_dropdown_box">
                  <FaPlus className='icon_mobile_dropdown'/>
                  <a href="#">NFT & Collection</a>
                </div>
                <div className="mobile_dropdown_box">
                  <FaPlus className='icon_mobile_dropdown'/>
                  <a href="#">My profile</a>
                </div>
              </div>
            )}

            <div className="mobile-menu-item" onClick={() => setShowDropdownExplore(!showDropdownExplore)}>
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
              </div>
            )}

            <div className="mobile-menu-item">
              <a href="#" className='item_normal'>About</a> 
            </div>
            <div className="mobile-menu-item">
              <a href="#" className='item_normal'>Contact Us</a>   
            </div>
            <div className="mobile-menu-item">
              <a href="#" className='item_normal'>Connect Wallet</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
