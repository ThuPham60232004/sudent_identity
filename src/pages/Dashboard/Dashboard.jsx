

import { useState } from 'react';
import "./Dashboard.css";
import { NavLink, Outlet } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CollectionsIcon from "@mui/icons-material/Collections"; 
import ExploreIcon from "@mui/icons-material/Explore";
import DnsIcon from "@mui/icons-material/Dns";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ShareIcon from "@mui/icons-material/Share";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import LockIcon from "@mui/icons-material/Lock";
import { FaBars } from "react-icons/fa6";
import ShareNFTModal from "../../components/DashboardComponent/ShareNFTModal/ShareNFTModal";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const items = [
    { icon: <HomeIcon style={{ width: '25px', height: '25px',color:'white'  }} />, text: "Home", path: "/Dashboard/HomeDashboard" },
    { icon: <ShowChartIcon style={{ width: '25px', height: '25px',color:'white'  }}/>, text: "Live Pricing", path: "/Dashboard/BinanceChart" },
    { icon: <ExploreIcon style={{ width: '25px', height: '25px' ,color:'white' }}/>, text: "NFT Detail", path: "/Dashboard/NFTDetail" },
    { icon: <CollectionsIcon style={{ width: '25px', height: '25px' ,color:'white' }}/>, text: "Create Collection", path: "/Dashboard/CreatePage" },
    { icon: <CollectionsIcon style={{ width: '25px', height: '25px' ,color:'white' }}/>, text: "NFTs", path: "/Dashboard/NFTsPage" },
    { icon: <DnsIcon style={{ width: '25px', height: '25px' ,color:'white' }}/>, text: "Farm", path: "/Dashboard/PoolTable" },
    { 
      icon: <ShareIcon style={{ width: '25px', height: '25px' ,color:'white' }} />, 
      text: "Share NFT", 
      path: "#", 
      onClick: openModal 
    },
    { icon: <SwapHorizIcon style={{ width: '25px', height: '25px',color:'white' }}/>, text: "Swap", path: "/Dashboard/SwapComponent" },
    { icon: <AccountCircleIcon style={{ width: '25px', height: '25px',color:'white' }}/>, text: "Profile", path: "/Dashboard/AccountDashboard" },
    { icon: <HowToVoteIcon style={{ width: '25px', height: '25px',color:'white' }}/>, text: "Vote", path: "/Dashboard" },
    { icon: <LockIcon style={{ width: '25px', height: '25px',color:'white' }}/>, text: "Authentication", path: "/Dashboard" }
  ];

  return (
    <div className={`HomePage ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="HomePageContainer">
        <div className={`HomePageSideBar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="logo_web_bars">
            <div className="logo_sidebar">
              {!isSidebarCollapsed && <p>FINTECH</p>}
              {!isSidebarCollapsed && <img src="../img/collection.png" alt="Logo" />}
              
            </div>
            <div className="bars_sidebar">
              <FaBars className="icon_bars_sidebar" onClick={toggleSidebar} />
            </div>
          </div>
          
          <div className="sidebar_container_homepage">
            {items.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                style={{ textDecoration: "none", color: "black" }}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={item.onClick}
              >
                <div className="item_sidebar_group">
                  <div className="HomePageSideBarItemIcon" >{item.icon}</div>
                  {!isSidebarCollapsed && <div className="HomePageSideBarItemText"style={{color:'white' }}><p>{item.text}</p></div>}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="HomePageComponent">
          <Outlet />
        </div>
        <ShareNFTModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Dashboard;
