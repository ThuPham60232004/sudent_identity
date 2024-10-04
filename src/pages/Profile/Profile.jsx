import React from 'react'
import { TbWorld } from "react-icons/tb";
import { FaInstagram ,FaTwitter,FaHandshake,FaBars,FaEthereum} from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { IoIosMore,IoMdSearch } from "react-icons/io";
import { RiArrowDropDownLine,RiLayoutGrid2Line ,RiLayoutGridLine} from "react-icons/ri";
import { FaListUl } from "react-icons/fa6";
import { LuLayoutPanelLeft } from "react-icons/lu";
import "./Profile.css"

const Profile = () => {
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
            <div className="choose_item1"><a href="#">Collected</a></div>
            <div className="choose_item"><a href="#">Offer made</a></div>
            <div className="choose_item"><a href="#">Deal</a></div>
            <div className="choose_item"><a href="#"> Created</a></div>
            <div className="choose_item"><a href="#">Favorited</a></div>
            <div className="choose_item"><a href="#">Activity</a></div>
            <div className="choose_item">
                 <p>More <span><RiArrowDropDownLine className='icon_profile_page'/></span></p>     
            </div>

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
                <div className="total_items">
                     <p>0 Items</p>
                </div>
                <div className="items_container_profile">
                    <p>No items found  for this search</p>
                    <button>Back to all items</button>
                </div>
            </div>
            
        </div>
    
  )
}

export default Profile
