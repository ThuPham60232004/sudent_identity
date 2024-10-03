import React, { useState,useEffect } from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import WalletLogin from "../../WalletModal/WalletModal"; 
import { ethers } from 'ethers';
const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null); 
  const [walletBalance, setWalletBalance] = useState(null);
  const [chainName, setChainName] = useState(null); 
  const handleClick = () => {
    setOpenModal(true); 
  };
  useEffect(() => {
    const savedAddress = localStorage.getItem("walletAddress");
    if (savedAddress) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      handleWalletConnect(savedAddress, provider);
    }
  }, []);
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
    <div className="navbarDashboard">
      <div className="wrapper1">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
                {walletAddress ? (
              <div className="wallet-info1">
                <div className="wallet-address1">
                  {/* Hiển thị địa chỉ ví rút gọn */}
                  {`${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}`}
                </div>
                <div className="wallet-balance1">
                  {/* Hiển thị số dư */}
                  {walletBalance ? `${walletBalance}` : "Loading..."}
                </div>
                <div className="chain-name1">
                  {/* Hiển thị tên chain */}
                  {chainName ? chainName : "Unknown Chain"}
                </div>
              </div>
            ) : (
            <button className="connect-button1" onClick={handleClick} >
              CONNECT
            </button>
            )}
          </div>
        </div>
      </div>
      
      {openModal && <WalletLogin onClose={handleClose}onConnect={handleWalletConnect} />}
    </div>
  );
};

export default Navbar;
