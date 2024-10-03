import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import './navbar.css';
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaBarsStaggered } from "react-icons/fa6";
import WalletModal from '../WalletModal/WalletModal';
import { ethers } from 'ethers';
const Navbar = () => {
  const [showDropdownCreate, setShowDropdownCreate] = useState(false);
  const [showDropdownExplore, setShowDropdownExplore] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null); 
  const [walletBalance, setWalletBalance] = useState(null);
  const [chainName, setChainName] = useState(null); 
  useEffect(() => {
    const savedAddress = localStorage.getItem("walletAddress");
    if (savedAddress) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
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

  const handleWalletConnect = async (address, provider) => {
    setWalletAddress(address);  // Cập nhật địa chỉ ví
    localStorage.setItem("walletAddress", address);
    // Lấy số dư ví
    const balance = await provider.getBalance(address);
    const formattedBalance = ethers.utils.formatEther(balance);  // Chuyển đổi sang Ether
    setWalletBalance(formattedBalance);  // Cập nhật số dư
  
    // Lấy tên chain
    const network = await provider.getNetwork();
    setChainName(network.name);  // Cập nhật tên chain
  
    setOpenModal(false);  // Đóng modal sau khi kết nối
  };
  

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo_navbar">
          <img src="./img/collection.png" alt="" />
          <div className="navbar-logo">FINTECH</div>
        </div>

        <div className="menu_navbar">
          <div className="navbar-item-wrapper">
            <div
              className="navbar-item"
              onMouseEnter={() => setShowDropdownCreate(true)}
              onMouseLeave={() => setShowDropdownCreate(false)}
            >
              Create
              <RiArrowDropDownFill size={30}/>
            </div>
            {showDropdownCreate && (
              <div className="dropdown">
                <a href="#">NFT & Collection</a>
                <a href="#">My Profile</a>
              </div>
            )}
          </div>

          <div className="navbar-item-wrapper">
            <div
              className="navbar-item"
              onMouseEnter={() => setShowDropdownExplore(true)}
              onMouseLeave={() => setShowDropdownExplore(false)}
            >
              Explore
              <RiArrowDropDownFill size={30}/>
            </div>
            {showDropdownExplore && (
              <div className="dropdown">
                <a href="#">All NFTs</a>
                <a href="#">All Collections</a>
                <a href="#">Categories</a>
              </div>
            )}
          </div>

          <div className="navbar-item"><a href="">About</a></div>
          <div className="navbar-item"><a href="">Contact Us</a></div>
        </div>


        {walletAddress ? (
        <div className="wallet-info">
          <div className="wallet-address">
            {/* Hiển thị địa chỉ ví rút gọn */}
            {`${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}`}
          </div>
          <div className="wallet-balance">
            {/* Hiển thị số dư */}
            {walletBalance ? `${walletBalance} ETH` : "Loading..."}
          </div>
          <div className="chain-name">
            {/* Hiển thị tên chain */}
            {chainName ? chainName : "Unknown Chain"}
          </div>
        </div>
      ) : (
        <button className="connect-wallet-btn" onClick={handleClick}>
          Connect Wallet
        </button>
      )}


        {openModal && <WalletModal onClose={handleClose} onConnect={handleWalletConnect} />}
        <FaBarsStaggered className="icon_navbar-bars" onClick={toggleMobileMenu} />

        {showMobileMenu && (
          <div className="mobile-menu">
            {/* Các mục mobile */}
            <div className="mobile-menu-item">
              <a href="#">Create</a>
            </div>
            <div className="mobile-menu-item">
              <a href="#">Explore</a>
            </div>
            <div className="mobile-menu-item">
              <a href="#">About</a>
            </div>
            <div className="mobile-menu-item">
              <a href="#">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
