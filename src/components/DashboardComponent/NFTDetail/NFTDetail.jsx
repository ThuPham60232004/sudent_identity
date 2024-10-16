
import React,{useState} from "react";
import "./NFTDetail.scss";  
import { FaEye, FaHeart, FaShareAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import ShareNFTModal from "../ShareNFTModal/ShareNFTModal";
import BuyModal from "../BuyModal/BuyModal";
import SellModal from "../SellModal/SellModal";
import { IoClose,IoShare } from "react-icons/io5";
import { BsFillTagsFill } from "react-icons/bs";
import { PiArrowsDownUpBold } from "react-icons/pi";
import { FaEthereum,FaDiscord,FaTwitter,FaHandshake } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { RiBarChartHorizontalFill,RiLayout4Fill, RiArrowDropDownLine,RiLayoutGrid2Line } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { IoMdMore,IoIosMore,IoMdCart } from "react-icons/io";
import { BiSolidCommentDetail } from "react-icons/bi";
import { FaChartLine,FaBarsProgress } from "react-icons/fa6";
import TransferItem from "../TransferItem/TransferItem";
const NFTDetail = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState(false);


  const openSellModal = () => setIsSellModalOpen(true);
  const closeSellModal = () => setIsSellModalOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openBuyModal = () => setIsBuyModalOpen(true);
  const closeBuyModal = () => setIsBuyModalOpen(false);

   const openTransfer = () => setIsTransferOpen(true);
  const closeTransfer = () => setIsTransferOpen(false);

   const [isOpen_con2, setIsOpen_con2] = useState(false);

  const toggleOpenClose_con2 = () => {
    setIsOpen_con2(!isOpen_con2);
  };

const [isOpen_con3, setIsOpen_con3] = useState(false);
 const toggleOpenClose_con3 = () => {
    setIsOpen_con3(!isOpen_con3);
  };

const [isOpen_listing_right_con1, setIsOpen_listing_right_con1] = useState(false);
 const toggleOpenClose_listing_right_con1 = () => {
    setIsOpen_listing_right_con1(!isOpen_listing_right_con1);
  };

const [isOpen_offer_right_con1, setIsOpen_offer_right_con1] = useState(false);
const toggleOpenClose_offer_right_con1 = () => {
    setIsOpen_offer_right_con1(!isOpen_offer_right_con1);
  };

const [isOpen_price_history_right_con1, setIsOpen_price_history_right_con1] = useState(false);
const toggleOpenClose_price_history_right_con1 = () => {
    setIsOpen_price_history_right_con1(!isOpen_price_history_right_con1);
  };


const [isOpen_about_left_con1, setIsOpen_about_left_con1] = useState(false);
const toggleOpenClose_about_left_con1 = () => {
    setIsOpen_about_left_con1(!isOpen_about_left_con1);
  };

const [isOpen_detail_left_con1, setIsOpen_detail_left_con1] = useState(false);
const toggleOpenClose_detail_left_con1 = () => {
    setIsOpen_detail_left_con1(!isOpen_detail_left_con1);
  };

const dummyData = [
    {
      name: 'NFT Name 1',
      price: '0.17 ETH',
      lastSale: '0.13 WETH',
      image: '../img/collection.png',
    },
    {
      name: 'NFT Name 2',
      price: '0.25 ETH',
      lastSale: '0.18 WETH',
      image: '../img/collection.png',
    },
    {
      name: 'NFT Name 3',
      price: '0.17 ETH',
      lastSale: '0.13 WETH',
      image: '../img/collection.png',
    },
    {
      name: 'NFT Name 4',
      price: '0.25 ETH',
      lastSale: '0.18 WETH',
      image: '../img/collection.png',
    },
    {
      name: 'NFT Name 2',
      price: '0.25 ETH',
      lastSale: '0.18 WETH',
      image: '../img/collection.png',
    },
  ];


  return (
    <div className="nft_detaile_page">
      <div className="nft_detail_page_container1">
        <div className="left_detail_page_con1">
          <div className="left_detail_page_con1_main">
            <div className="image_nft_detail_con1">
              <div className="heart_nft_img">
                <FaEthereum/>
                <div className="right_heart_nft_img">
                  <MdOutlineZoomOutMap/>
                  <CiHeart/>
                </div>     
              </div>
              <img src={item.imageSrc} alt="description" />
              <div className="item_img_detail_con1">
              <img src={item.smallImageSrc} alt="description" />
              <img src={item.smallImageSrc} alt="description" />
              <img src={item.smallImageSrc} alt="description" />
              <img src={item.smallImageSrc} alt="description" />
              </div>
            </div>
            <div className="description_nft_con1">
              <div className="title_con1">
                <RiBarChartHorizontalFill className="icon_RiBarChartHorizontalFill"/>
                <p className="title_main_box">Description</p>
              </div>
              <div className="by_user_create_nft_con1">
                <p>By <span><a href="#">88B223</a></span></p>
              </div>

              <div className="about_nft_detail_con1">
                <div className={`title_about_nft_detail_con1 ${isOpen_about_left_con1 ? '' : 'closed'}`} >
                  <div className="title_about_con1_left">
                    <RiLayout4Fill/>
                  <p className="title_main_box">About Gomble spacekids</p>
                  </div>
                  <div className="open_close_about_left_con1" onClick={toggleOpenClose_about_left_con1}>
                  <RiArrowDropDownLine className={`icon_open_close_nft_page ${isOpen_about_left_con1 ? 'open' : 'closed'}`} />
                </div>
                
                </div>
                {isOpen_about_left_con1 && (
                <div className="des_nft_detail_con1">
                  <p>GOMBLE's PFP Collection: SpaceKids NFTs unlock exclusive benefits and access to some of the largest token allocations in GOMBLE’s universe. Dive into the dynamic gameplay and secure your place among the stars with these limited-edition NFTs. Don’t miss this last chance to power up your game and take your collection to new heights!</p>
                  <div className="hype_link_connect_con1">
                    <div className="item_link_connect_con1">
                      <TbWorld className="icon_link_hype"/>
                    </div>
                    <div className="item_link_connect_con1">
                      <FaDiscord className="icon_link_hype"/>
                    </div>
                    <div className="item_link_connect_con1">
                      <FaTwitter className="icon_link_hype"/>
                    </div>
                    <div className="item_link_connect_con1">
                      <IoMdMore className="icon_link_hype"/>
                    </div>
                  </div>
                </div>
                )}
              </div>

              <div className="detail_nft_con1">
                <div className="title_detail_con1">
                  <div className={`title_detail ${isOpen_detail_left_con1 ? '' : 'closed'}`} style={{ borderRadius: isOpen_detail_left_con1 ? '0' : '0 0 10px 10px' }}>
                    <BiSolidCommentDetail className="icon_BiSolidCommentDetail"/>
                    <p className="title_main_box">Detail</p>
                  </div>
                  <div className="open_close_detail_left_con1" onClick={toggleOpenClose_detail_left_con1}>
                  <RiArrowDropDownLine className={`icon_open_close_nft_page ${isOpen_detail_left_con1 ? 'open' : 'closed'}`} />
                </div>
                </div>
                {isOpen_detail_left_con1 && (
                <div className="content_detail_Con1">
                  <div className="item_content_con1">
                    <p>Contract Address</p>
                    <a href="#">0x606e...1081</a>
                  </div>
                  <div className="item_content_con1">
                    <p>Token ID</p>
                    <p>1316</p>
                  </div>
                  <div className="item_content_con1">
                    <p>Token Standard</p>
                    <p>ERC-721</p>
                  </div>
                  <div className="item_content_con1">
                    <p>Chain</p>
                    <p>Ethereum</p>
                  </div>
                  <div className="item_content_con1">
                    <p>Last Updated</p>
                    <p>13 days ago</p>
                  </div>
                  <div className="item_content_con1">
                    <p>Creator Earnings</p>
                    <p>1%</p>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
          
        </div>
        <div className="right_detail_page_con1">
          <div className="right_detail_page_con1_main">
            <div className="info_nft_right_con1">
              <div className="action_con1">
              <a href="#">{item.nftName}</a>
                <div className="action__con1">
                  <FaHandshake/>
                  <IoShare onClick={openModal}/>
                  <ShareNFTModal isOpen={isModalOpen} onClose={closeModal} />
                  <IoMdSend onClick={openTransfer}/>
                  <TransferItem isOpen={isTransferOpen} onClose={closeTransfer}/>
                  {/* <Link to='./TransferItem' style={{textDecoration:"none", color:"white"}}><IoMdSend/></Link> */}
                </div>
              </div>
              <div className="name_nft_con1">
              <h3>{item.nftName}</h3>
              <p>Owner by <span><a href="#">{item.creator}</a></span></p>
              </div>
              <div className="view_nft_con1">
                <div className="view_nft__con1">
                   <FaEye/>
                    <p>40 View</p>
                </div>
                <div className="favorite_nft__con1">
                  <FaHeart/>
                  <p>{item.likes}</p>
                </div>
              </div>
            </div>
            <div className="sale_nft_right_con1">
              <div className="time_sale__con1">
                <p>{item.endDate} </p>
                <div className="time_sale_on__con1">
                   <div className="time_con">
                  <p className="value_time_con">00</p>
                  <p>Days</p>
                </div>
                  <div className="time_con">
                  <p className="value_time_con">00</p>
                  <p>Hours</p>
                </div>
                <div className="time_con">
                  <p className="value_time_con">17</p>
                  <p>Minutes</p>
                </div>
                <div className="time_con">
                  <p className="value_time_con">57</p>
                  <p>Seconds</p>
                </div>
                </div>
              </div>
              <div className="price__con1">
                <p>Current price</p>
                <h4>{item.price}<span>$316.62</span></h4>
                
              </div>
              <div className="buy__con1">
                <div className="btn__buy__con1">
                  <button className="btn_buy" onClick={openBuyModal}>Buy now</button>
                  <BuyModal isOpen={isBuyModalOpen} onClose={closeBuyModal} />
                  <button className="btn_add_cart"><IoMdCart className="icon_cart_btn"/></button>
                </div>
                <div className="btn__make_offer__con1">
                  <button className="btn_make_offer" onClick={openSellModal}>Sell</button>
                   <SellModal isOpen={isSellModalOpen} onClose={closeSellModal} />
                </div>
              </div>
            </div>

            <div className="price_history_right_con1">
              <div className={`title_price_history__con1 ${isOpen_price_history_right_con1 ? '' : 'closed'}`} style={{ borderRadius: isOpen_price_history_right_con1 ? '10px 10px 0 0' : '10px' }}>
                <div className="title_price__con">
                  <FaChartLine/>
                  <p className="title_main_box">Price history</p>
                </div>
                <div className="open_close_price_history_right_con1" onClick={toggleOpenClose_price_history_right_con1}>
                  <RiArrowDropDownLine className={`icon_open_close_nft_page ${isOpen_price_history_right_con1 ? 'open' : 'closed'}`} />
                </div>
              </div>
               {isOpen_price_history_right_con1 && (
              <div className="chart_price_history__con1">
                <p>đây là biểu đồ</p>
              </div>
               )}
            </div>


            <div className="listings_right_con1">
              <div className={`title_listing__con1 ${isOpen_listing_right_con1 ? '' : 'closed'}`} style={{ borderRadius: isOpen_listing_right_con1 ? '10px 10px 0 0' : '10px' }}>
                <div className="title__con">
                  <BsFillTagsFill/>
                <p className="title_main_box">Listings</p>
                </div>
                <div className="open_close_listing_right_con1" onClick={toggleOpenClose_listing_right_con1}>
                  <RiArrowDropDownLine className={`icon_open_close_nft_page ${isOpen_listing_right_con1 ? 'open' : 'closed'}`} />
                </div>
                
              </div>
              {isOpen_listing_right_con1 && (
              <div className="content_listing_table__con1">
                <div className="title_table__con1">
                  <p className="price_list_table__con1">Price</p>
                  <p className="quantity_table__con1">Quantity</p>
                  <p className="expiration_table__con1">Expiration</p>
                  <p className="from_table__con1">From</p>
                  <p className="action_table__con1"></p>
                </div>
                <div className="content_table__con1">
                  <div className="price_list_table__con1">
                    <p>0.1349 ETH</p>
                    <p className="usd_price_table__con1">$328.24</p>
                  </div>
                  <p className="quantity_table__con1">1</p>
                  <p className="expiration_table__con1">in 1 month</p>
                  <a className="from_table__con1" href="#">Zerrosh</a>
                  <button className="action_table__con1">Buy</button>
                </div>
                    <div className="content_table__con1">
                  <div className="price_list_table__con1">
                    <p>0.1349 ETH</p>
                    <p className="usd_price_table__con1">$328.24</p>
                  </div>
                  <p className="quantity_table__con1">1</p>
                  <p className="expiration_table__con1">in 1 month</p>
                  <a className="from_table__con1" href="#">Zerrosh</a>
                  <button className="action_table__con1">Buy</button>
                </div>
              </div>  
              )}
            </div>
            <div className="offers_right_con1">
              <div className={`title_right__con1 ${isOpen_offer_right_con1 ? '' : 'closed'}`} style={{ borderRadius: isOpen_offer_right_con1 ? '10px 10px 0 0' : '10px' }}>
                <div className="title_offer_con">
                  <FaBarsProgress/>
                   <p className="title_main_box">Offers</p>
                </div>
                <div className="open_close_offer_right_con1" onClick={toggleOpenClose_offer_right_con1}>
                  <RiArrowDropDownLine className={`icon_open_close_nft_page ${isOpen_offer_right_con1 ? 'open' : 'closed'}`} />
                </div>
              </div>
              {isOpen_offer_right_con1 && (
              <div className="content_offer_table_con1">
                <div className="title_content_offer_table__con1">
                  <p className="price_offer__con1">Price</p>
                  <p className="quantity_offer__con1">Quantity</p>
                  <p className="floor_difference_offer__con1">Floor difference</p>
                  <p className="exporation_offer__con1">Expiration</p>
                  <p className="from_offer__con1">From</p>
                </div>
                <div className="offer_item_value__con1">
                  <div className="price_offer__con1">
                    <p className="price_offer_value_ofer">0.1241 WETH</p>
                    <p className="price_usd_value_offer">$302.05</p>
                  </div>
                  <p className="quantity_offer__con1">1</p>
                  <p className="floor_difference_offer__con1">13% below</p>
                  <p className="exporation_offer__con1">in 5 hours</p>
                  <a className="from_offer__con1" href="#">YuraYara</a>
                </div>
                 <div className="offer_item_value__con1">
                  <div className="price_offer__con1">
                    <p className="price_offer_value_ofer">0.1241 WETH</p>
                    <p className="price_usd_value_offer">$302.05</p>
                  </div>
                  <p className="quantity_offer__con1">1</p>
                  <p className="floor_difference_offer__con1">13% below</p>
                  <p className="exporation_offer__con1">in 5 hours</p>
                  <a className="from_offer__con1" href="#">YuraYara</a>
                </div>
                 <div className="offer_item_value__con1">
                  <div className="price_offer__con1">
                    <p className="price_offer_value_ofer">0.1241 WETH</p>
                    <p className="price_usd_value_offer">$302.05</p>
                  </div>
                  <p className="quantity_offer__con1">1</p>
                  <p className="floor_difference_offer__con1">13% below</p>
                  <p className="exporation_offer__con1">in 5 hours</p>
                  <a className="from_offer__con1" href="#">YuraYara</a>
                </div>
              </div>
              )}
            </div>
          </div>
        
        </div>
      </div>
   <div className="nft_detail_page_container2">
      <div className="nft_detail_page_con2">
        <div className={`header_con2 ${isOpen_con2 ? '' : 'closed'}`} style={{ borderRadius: isOpen_con2 ? '20px 20px 0 0' : '20px' }}>
          <div className="title_header_con2">
            <PiArrowsDownUpBold className="icon_item_activity" />
            <p className="title_main_box">Item Activity</p>
          </div>
          <div className="open_close_con2" onClick={toggleOpenClose_con2}>
            <RiArrowDropDownLine className={`icon_open_close_nft_page ${isOpen_con2 ? 'open' : 'closed'}`} />
          </div>
        </div>

        {isOpen_con2 && (
          <div className="body_con2">
            <div className="filter_body_con2">
              <div className="title_filter_con2">
                <p>Filter</p>
                <RiArrowDropDownLine className="icon_dropdown_filter_con2" />
              </div>
              <div className="filter_con2">
                <div className="item_filter_con2">
                  <p>Sales</p>
                  <IoClose />
                </div>
                <div className="item_filter_con2">
                  <p>Listings</p>
                  <IoClose />
                </div>
                <p className="clear_all">Clear All</p>
              </div>
            </div>
            <div className="content_con2">
              <div className="title_item_activity_con2">
                <p>Event</p>
                <p>Price</p>
                <p>From</p>
                <p>To</p>
                <p>Date</p>
              </div>
              <div className="item_activity_con2">
                <div className="list_con2">
                  <BsFillTagsFill className="icon_list_con2" />
                  <p>List</p>
                </div>
                <p>0.1265 ETH</p>
                <a href="#">YuraYuraGay</a>
                <a href="#"></a>
                <p>31m ago</p>
              </div>
              <div className="item_activity_con2">
                <div className="list_con2">
                  <BsFillTagsFill className="icon_list_con2" />
                  <p>List</p>
                </div>
                <p>0.1265 ETH</p>
                <a href="#">YuraYuraGay</a>
                <a href="#">YuraYuraGay</a>
                <p>31m ago</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
     <div className="nft_detail_page_container3">
      <div className="nft_detail_page_con3">
        <div className={`header_con3 ${isOpen_con3 ? '' : 'closed'}`} style={{ borderRadius: isOpen_con3 ? '20px 20px 0 0' : '20px' }}>
          <div className="title_con3">
            <RiLayoutGrid2Line className="icon_nft_detail_page" />
            <p className="title_main_box">More from this collection</p>
          </div>
          <div className="open_close_con3" onClick={toggleOpenClose_con3}>
            <RiArrowDropDownLine className={`icon_open_close_nft_page ${isOpen_con3 ? 'open' : 'closed'}`} />
          </div>
        </div>

        {isOpen_con3 && (
          <div className="body_container3">
            {/* Scrollable container */}
            {dummyData.map((nft, index) => (
              <div key={index} className="item_nft_con3">
                <img src={nft.image} alt="" />
                <div className="detail_nft_con3">
                  <div className="info_con3">
                    <h3>{nft.name}</h3>
                    <h4>{nft.price}</h4>
                    <p>Last sale: {nft.lastSale}</p>
                  </div>
                  <div className="btn_buy_cart_con3">
                    <div className="buy_con3">Buy</div>
                    <div className="cart_con3">Cart</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default NFTDetail;
