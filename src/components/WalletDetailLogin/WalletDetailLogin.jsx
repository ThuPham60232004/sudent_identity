import React from 'react'
import { RxCopy } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";
import { SiPolygon } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineFundView } from "react-icons/ai";
import { LuWallet } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import "./WalletDetailLogin.css";
import { IoIosSend } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";

const WalletDetailLogin = ({onClose, onDisconnect }) => {
  return (
    <div className="WalletDetailModal_Container_login">
    <IoCloseCircleOutline className='icon_close_wallet_detail_login' onClick={onClose}/>
    <div className="info_wallet_container_login">
        <div className="img_avatar">
             <img src="./img/METAMASK.png" alt="" className='logo_wallet_user_login'/>
            <img src="./img/bg.png" alt="" className='avatar_user_login'/>
           
        </div>
        <div className="text_info_wallet_user_login">
            <div className="copy_info_user_login">
                <h2>gvjhiub...ghbnh</h2>
                <RxCopy className='icon_wallet_detail_style_login'/>
            </div>
            <p>MetaMask</p>
        </div>

    </div>
    <div className="action_wallet_detail_con_login">
        <button><a href="#"><IoIosSend className='icon_wallet_detail_style_login'/>Send</a></button>
        <button><a href="#"><RiDownloadLine className='icon_wallet_detail_style_login'/>Receive</a></button>
        <button><a href="#"><FiPlus className='icon_wallet_detail_style_login'/>Buy</a></button>
    </div>
    <div className="menu_detail_wallet_login">
        <div className="item_detail_wallet_login">
            <SiPolygon className='icon_item_menu_login'/>
            <div className="content_item_menu_login">
                <h3>Polygon Mainnet</h3>
                <p>1.8765576 POL</p>
            </div>
          <MdOutlineKeyboardArrowRight className='icon_dropdown_item_menu_login'/>
        </div>
          <div className="item_detail_wallet_login">
            <FaBars className='icon_item_menu_login'/>
             <h3>Transactions</h3>
        </div>
        <div className="item_detail_wallet_login">
           <AiOutlineFundView className='icon_item_menu_login'/>
             <h3>View Funds</h3>
        </div>
        <div className="item_detail_wallet_login">
            <LuWallet className='icon_item_menu_login'/>
          <h3>Manage Wallet</h3>
        </div>
       
          <div className="item_detail_wallet_out_login" onClick={onDisconnect}>
          <MdLogout className='icon_item_menu_login'/>
           <h3>Disconnect Wallet</h3>
        </div>

    </div>

  </div>
  )
}

export default WalletDetailLogin
