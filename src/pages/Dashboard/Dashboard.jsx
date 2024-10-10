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
import { RiNftFill, RiArrowDropDownLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import ShareNFTModal from "../../components/DashboardComponent/ShareNFTModal/ShareNFTModal";
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

 const items = [
  { icon: <HomeIcon style={{ width: '20px', height: '20px' }} />, text: "Home", path: "/Dashboard/HomeDashboard" },
  { icon: <ShowChartIcon style={{ width: '20px', height: '20px' }} />, text: "Live Pricing", path: "/Dashboard/BinanceChart" },
  { icon: <ExploreIcon style={{ width: '20px', height: '20px' }} />, text: "NFT Detail", path: "/Dashboard/NFTDetail" },
  { icon: <CollectionsIcon style={{ width: '20px', height: '20px' }} />, text: "Create Collection", path: "/Dashboard/CreatePage" },
  { icon: <RiNftFill style={{ width: '20px', height: '20px' }} />, text: "NFTs", path: "/Dashboard/NFTsPage" },
  { icon: <DnsIcon style={{ width: '20px', height: '20px' }} />, text: "Farm", path: "/Dashboard/PoolTable" },
  { 
    icon: <ShareIcon style={{ width: '20px', height: '20px' }} />, 
    text: "Share NFT", 
    path: "#", 
    onClick: openModal 
  },
  { icon: <SwapHorizIcon style={{ width: '20px', height: '20px' }} />, text: "Swap", path: "/Dashboard/SwapComponent" },
  { icon: <AccountCircleIcon style={{ width: '20px', height: '20px' }} />, text: "Profile", path: "/Dashboard/Profile" },
  { icon: <HowToVoteIcon style={{ width: '20px', height: '20px' }} />, text: "Vote", path: "/Dashboard" },
  { icon: <MdLogout style={{ width: '20px', height: '20px' }} />, text: "Logout", path: "/login" },
 
];


  return (
    <div className={`HomePage ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="HomePageContainer">
        <div className={`HomePageSideBar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="logo_web_bars">
            <div className="logo_sidebar">
              {!isSidebarCollapsed && <p><Link to='/' style={{textDecoration:"none",color:"white"}}>FINTECH</Link></p>}
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
                 <div 
        className="item_sidebar_group" 
        style={{ backgroundColor: item.text === 'Home' ? 'black' : '', color: item.text === 'Home' ? 'white' : 'black' }} // Thay đổi màu chữ cho Home
      >
                  <div className="HomePageSideBarItemIcon">{item.icon}</div>
                  {!isSidebarCollapsed && <div className="HomePageSideBarItemText"><p>{item.text}</p></div>}
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Navbar Component */}
        <div className="navbar_dashboard">
          <div className="search_input_dashboard">
            <input className='input_search_dashboard' type="search" placeholder='Search here..'/>
            <IoSearchSharp className='icon_search_navbar_dashboard'/>
          </div>
          <div className="feature_user_dashboard">
            <div className="announcement_dashboard">
              <FaBell className='icon_announcement_navbar_dashboard'/>
            </div>
            <div className="info_user_dashboard">
              <img src="../img/collection.png" alt="User" />
            </div>
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
