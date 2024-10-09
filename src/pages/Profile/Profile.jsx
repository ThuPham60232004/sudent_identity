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
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMore = () => {
        setIsExpanded(!isExpanded);
    };
    const { item } = useContext(ItemContext);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/Dashboard/Profile') {
            navigate('ActiveListings');
        }
    }, [location.pathname, navigate]);

  return (
    <div className="profile_page">
        <div className="navbar_profile">
            <p>navbar ở đây</p>
        </div>
        <div className="header_profile">
            <div className="bg_user_profile">
                <img className='avatar_user_profile' src="./img/collection.png" alt="" /> 
               <div className="bg__user">
                    <img src="./img/bg.png" alt="" />
               </div>  
            </div>
            <div className="con_profile"></div>
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
                <h4><span><FaEthereum className='icon_ether'/></span>hjbsddhwhsbf....</h4>
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
            <div className="choose_item" onClick={toggleMore}>
                <p>More <span><RiArrowDropDownLine className='icon_profile_page'/></span></p>
            </div>
            {isExpanded && (
                <div className="choose_item_more">
                    <div className="choose_item">
                        <NavLink to="OffersReceived" className={({ isActive }) => isActive ? "active" : ""}>
                        OffersReceived
                        </NavLink>
                    </div>
                    <div className="choose_item">
                        <NavLink to="ActiveListings" className={({ isActive }) => isActive ? "active" : ""}>
                        ActiveListings
                        </NavLink>
                    </div>
                    <div className="choose_item">
                        <NavLink to="InactiveListings" className={({ isActive }) => isActive ? "active" : ""}>
                        InactiveListings
                        </NavLink>
                    </div>
                    <div className="choose_item">
                        <NavLink to="Hiddens" className={({ isActive }) => isActive ? "active" : ""}>
                            Hiddens
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
            <div className="filter_search_profile">
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
                    <input type="text" className='search_input_profile' />
                    <IoMdSearch className='icon_profile_page'/>
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
            </div>
            <div className="display_items_container">
            <Outlet/>
            </div>
            
        </div>
    
  )
}

export default Profile
