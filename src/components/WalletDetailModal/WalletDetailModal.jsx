import React,{useState} from 'react'
import { RxCopy } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";
import { SiPolygon } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineFundView } from "react-icons/ai";
import { LuWallet } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import "./WalletDetailModal.css";
import { IoIosSend } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";

const WalletDetailModal = ({ onClose, onDisconnect }) => {
  return (
    <div className="WalletDetailModal_Container">
      <IoCloseCircleOutline className="icon_close_wallet_detail" onClick={onClose} />
      <div className="info_wallet_container">
        <div className="img_avatar">
          <img src="./img/METAMASK.png" alt="" className="logo_wallet_user" />
          <img src="./img/bg.png" alt="" className="avatar_user" />
        </div>
        <div className="text_info_wallet_user">
          <div className="copy_info_user">
            <h2>gvjhiub...ghbnh</h2>
            <RxCopy className="icon_wallet_detail_style" />
          </div>
          <p>MetaMask</p>
        </div>
      </div>
      <div className="action_wallet_detail_con">
        <button>
          <a href="#">
            <IoIosSend className="icon_wallet_detail_style" />
            Send
          </a>
        </button>
        <button>
          <a href="#">
            <RiDownloadLine className="icon_wallet_detail_style" />
            Receive
          </a>
        </button>
        <button>
          <a href="#">
            <FiPlus className="icon_wallet_detail_style" />
            Buy
          </a>
        </button>
      </div>
      <div className="menu_detail_wallet">
        <div className="item_detail_wallet">
          <SiPolygon className="icon_item_menu" />
          <div className="content_item_menu">
            <h3>Polygon Mainnet</h3>
            <p>1.8765576 POL</p>
          </div>
          <MdOutlineKeyboardArrowRight className="icon_dropdown_item_menu" />
        </div>
        <div className="item_detail_wallet">
          <FaBars className="icon_item_menu" />
          <h3>Transactions</h3>
        </div>
        <div className="item_detail_wallet">
          <AiOutlineFundView className="icon_item_menu" />
          <h3>View Funds</h3>
        </div>
        <div className="item_detail_wallet">
          <LuWallet className="icon_item_menu" />
          <h3>Manage Wallet</h3>
        </div>
        <div className="item_detail_wallet_out" onClick={onDisconnect}>
          <MdLogout className="icon_item_menu" />
          <h3>Disconnect Wallet</h3>
        </div>
      </div>
    </div>
  );
};

export default WalletDetailModal;
