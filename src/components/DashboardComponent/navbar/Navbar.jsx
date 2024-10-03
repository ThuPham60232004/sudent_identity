import React, { useState,useEffect } from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WalletDetailModal from "../../WalletDetailModal/WalletDetailModal";
import WalletLogin from "../../WalletModal/WalletModal"; 
import { ethers } from 'ethers';
const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  const [chainName, setChainName] = useState(null);
  const [openWalletDetailModal, setOpenWalletDetailModal] = useState(false);

  const handleOpenWalletDetail = () => {
    setOpenWalletDetailModal(true);
  };

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
    setWalletAddress(address);
    localStorage.setItem("walletAddress", address);

    const balance = await provider.getBalance(address);
    const formattedBalance = ethers.utils.formatEther(balance); // Chuyển đổi sang Ether
    setWalletBalance(formattedBalance);
    const network = await provider.getNetwork();
    setChainName(network.name);

    setOpenModal(false);
  };

  const handleWalletDisconnect = () => {
    // Xóa thông tin ví khỏi localStorage và reset các trạng thái
    localStorage.removeItem("walletAddress");
    setWalletAddress(null);
    setWalletBalance(null);
    setChainName(null);
    setOpenWalletDetailModal(false); // Đóng modal chi tiết ví
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
              <div className="wallet-info1" onClick={handleOpenWalletDetail}>
                <div className="wallet-address1">
                  {`${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}`}
                </div>
                {openWalletDetailModal && <WalletDetailModal onClose={() => setOpenWalletDetailModal(false)} onDisconnect={handleWalletDisconnect} />}

                <div className="wallet-balance1">
                  {walletBalance ? `${walletBalance}` : "Loading..."}
                </div>
                <div className="chain-name1">
                  {chainName ? chainName : "Unknown Chain"}
                </div>
              </div>
            ) : (
              <button className="connect-button1" onClick={handleClick}>
                CONNECT
              </button>
            )}
          </div>
        </div>
      </div>

      {openModal && <WalletLogin onClose={handleClose} onConnect={handleWalletConnect} />}
      {openWalletDetailModal && <WalletDetailModal onClose={() => setOpenWalletDetailModal(false)} onDisconnect={handleWalletDisconnect} />}
    </div>
  );
};

export default Navbar;
