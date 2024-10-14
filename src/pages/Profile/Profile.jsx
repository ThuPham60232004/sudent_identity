import React, { useContext, useEffect,useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { TbWorld } from "react-icons/tb";
import { FaInstagram ,FaTwitter,FaHandshake,FaBars,FaEthereum} from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { IoIosMore,IoMdSearch } from "react-icons/io";
import { RiArrowDropDownLine,RiLayoutGrid2Line ,RiLayoutGridLine} from "react-icons/ri";
import { FaListUl } from "react-icons/fa6";
import { LuLayoutPanelLeft } from "react-icons/lu";
import "./Profile.css"
import { ItemContext } from '../../context/ItemContext';
const Profile = () => {
    const { item } = useContext(ItemContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/Dashboard/Profile') {
            navigate('ActiveListings');
        }
    }, [location.pathname, navigate]);
    const [isExpanded, setIsExpanded] = useState(false);
    
    const handleMouseEnterMore = () => {
        setTimeout(() => setIsExpanded(true), 200);
    };

    const handleMouseLeaveMore = () => {
        setTimeout(() => setIsExpanded(false), 1000);
    };

    const toggleMore = () => {
        setIsExpanded(!isExpanded);
    };

  return (
    <div className="profile_page">
        <div className="header_profile">
            <div className="bg_user_profile">
                <img className='avatar_user_profile' src="https://th.bing.com/th/id/OIP.y2ItE7NCQBrsTDtkhCdr3wHaEK?rs=1&pid=ImgDetMain" alt="" /> 
               <div className="bg__user">
                     <img src="https://dxagroup.io/wp-content/uploads/Blog/CuratingthePerfectNFTArtCollectionExpertTips/cacurating-the-perfect-nft-art-collection-expert-tips-10.webp" alt="" />
               </div>
            </div>

            <div className="name_user_and_feature">
                
                <div className="name_user">
                    <h2>Name</h2>
                </div>
                <div className="social_feature">
                    <div className="social_profile">
                        <TbWorld className='icon_profile_page'/>
                        <FaInstagram className='icon_profile_page'/>
                        <FaTwitter className='icon_profile_page'/>
                    </div>
                    <p>|</p>
                    <div className="featute_profile">
                        <FaHandshake className='icon_profile_page'/>
                        <FaShareFromSquare className='icon_profile_page'/>
                        <IoIosMore className='icon_profile_page'/>
                    </div>
                </div>
            </div>
            <div className="link_account_profile">
                <h4><span><FaEthereum className='icon_ether'/></span> hjbsddhwhsbf....</h4>
                <p>Joined September 2024</p>
            </div>
        </div>   
        <div className="menu_choose_profile">
            <div className="choose_item">
                <NavLink to="Collected" className={({ isActive }) => isActive ? "active" : ""}>
                    Collected
                </NavLink>
            </div>
            <div className="choose_item">
                <NavLink to="OfferMade" className={({ isActive }) => isActive ? "active" : ""}>
                    Offer made
                </NavLink>
            </div>
            <div className="choose_item">
                <NavLink to="Deal" className={({ isActive }) => isActive ? "active" : ""}>
                    Deal
                </NavLink>
            </div>
            <div className="choose_item">
                <NavLink to="Created" className={({ isActive }) => isActive ? "active" : ""}>
                    Created
                </NavLink>
            </div>
            <div className="choose_item">
                <NavLink to="Favorited" className={({ isActive }) => isActive ? "active" : ""}>
                    Favorited
                </NavLink>
            </div>
            <div className="choose_item">
                <NavLink to="ActivityProfile" className={({ isActive }) => isActive ? "active" : ""}>
                    Activity
                </NavLink>
            </div>
            <div className="choose_item" 
             onMouseEnter={handleMouseEnterMore} 
             onMouseLeave={handleMouseLeaveMore}
             onClick={toggleMore}>
                <p>More</p>
                <RiArrowDropDownLine className='icon_profile_page_more'/>
        </div>
            {isExpanded && (
                <div className="choose_item_more">
                    <div className="choose_item_more_con">
                        <NavLink to="OffersReceived" className={({ isActive }) => isActive ? "active" : ""}>
                        OffersReceived
                        </NavLink>
                    </div>
                    <div className="choose_item_more_con">
                        <NavLink to="ActiveListings" className={({ isActive }) => isActive ? "active" : ""}>
                        ActiveListings
                        </NavLink>
                    </div>
                    <div className="choose_item_more_con">
                        <NavLink to="InactiveListings" className={({ isActive }) => isActive ? "active" : ""}>
                        InactiveListings
                        </NavLink>
                    </div>
                    <div className="choose_item_more_con">
                        <NavLink to="Hiddens" className={({ isActive }) => isActive ? "active" : ""}>
                            Hiddens
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
            {/* <div className="filter_search_profile">
                <div className="bo_loc_fabar">
                    <FaBars className='icon_profile_page'/>
                </div>
                <div className="status_profile">
                    <p>Status</p>
                    <RiArrowDropDownLine className='icon_profile_page'/>
                </div>
                <div className="chains_profile">
                    <p>Chains</p>
                    <RiArrowDropDownLine className='icon_profile_page'/>
                </div>
                <div className="search_profile">
                    <input type="text" className='search_input_profile' placeholder='Searching for..'/>
                    <IoMdSearch className='icon_search_profile_page'/>
                </div>
                <div className="recently_received">
                    <p>Recently received</p>
                    <RiArrowDropDownLine className='icon_profile_page'/>
                </div>
                <div className="layout_items">
                    <div className="layout_list">
                        <FaListUl className='icon_profile_page'/>
                    </div>
                    <div className="layout_grid2line">
                        <RiLayoutGrid2Line className='icon_profile_page'/>
                    </div>
                    <div className="layout_girdline">
                        <RiLayoutGridLine className='icon_profile_page'/>
                    </div>
                    <div className="layout_panel_left">
                        <LuLayoutPanelLeft className='icon_profile_page'/>
                    </div>
                </div>
            </div> */}
            <div className="display_items_container_page">
            <Outlet/>
            </div>
            
        </div>

  )
}

export default Profile
