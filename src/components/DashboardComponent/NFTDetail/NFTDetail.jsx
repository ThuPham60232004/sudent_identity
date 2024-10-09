// import React,{useState} from "react";
// import "./NFTDetail.css";
// import { FaEye, FaHeart, FaShareAlt } from "react-icons/fa";
// import { IoMdSend } from "react-icons/io";
// import { CiShare1 } from "react-icons/ci";
// import { RiArrowDropDownLine } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import ShareNFTModal from "../ShareNFTModal/ShareNFTModal";
// import BuyModal from "../BuyModal/BuyModal";
// import SellModal from "../SellModal/SellModal";
// const NFTDetail = () => {
//   const bids = [
//     { name: "Esther Howard", avatar: "https://png.pngtree.com/png-clipart/20230108/original/pngtree-nft-avatar-vector-element-png-image_8887536.png", bid: "2.65 ETH", time: "3 hours ago" },
//     { name: "Robert Fox", avatar: "https://png.pngtree.com/png-clipart/20230108/original/pngtree-nft-avatar-vector-element-png-image_8887536.png", bid: "2.65 ETH", time: "3 hours ago" },
//     { name: "Bessie Cooper", avatar: "https://png.pngtree.com/png-clipart/20230108/original/pngtree-nft-avatar-vector-element-png-image_8887536.png", bid: "2.65 ETH", time: "3 hours ago" },
//   ];
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
//   const [isSellModalOpen, setIsSellModalOpen] = useState(false);

//   const openSellModal = () => setIsSellModalOpen(true);
//   const closeSellModal = () => setIsSellModalOpen(false);
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);
//   const openBuyModal = () => setIsBuyModalOpen(true);
//   const closeBuyModal = () => setIsBuyModalOpen(false);
//   return (
//     <div className="nft-detail-container1">
//       <div className="nft-main1">
//         <div className="nft-image-section1">
//           <img src="https://ezway.s3.amazonaws.com/jondo/nft/nft-header-5.jpg" alt="Creative Artistic Design" className="nft-image11" />
//           <div className="nft-thumbnails1">
//             <img src="https://ezway.s3.amazonaws.com/jondo/nft/nft-header-5.jpg" alt="thumbnail1" className="nft-thumbnail1" /> 
//             <img src="https://ezway.s3.amazonaws.com/jondo/nft/nft-header-5.jpg" alt="thumbnail3" className="nft-thumbnail1" />
//             <img src="https://ezway.s3.amazonaws.com/jondo/nft/nft-header-5.jpg" alt="thumbnail2" className="nft-thumbnail1" />
//              <img src="https://ezway.s3.amazonaws.com/jondo/nft/nft-header-5.jpg" alt="thumbnail4" className="nft-thumbnail1" />
//           </div>
//         </div>
//         <div className="nft-info-section1">
//         <div className="nft-title1-container">
//         <h1 className="nft-title1">Creative Artistic Design</h1>
//         <div className="nft-title1-icons">
//             <Link to="/TransferItem" className="nft-icon play-icon">
//                 <IoMdSend />
//             </Link>
//             <Link onClick={openModal} className="nft-icon share-icon">
//                 <CiShare1 />
//             </Link>
//             <ShareNFTModal isOpen={isModalOpen} onClose={closeModal} />
//             <Link to="/more-options" className="nft-icon more-icon">
//                 <RiArrowDropDownLine />
//             </Link>
//         </div>
//         </div>
//           <p className="nft-id1">NFT ID : 2548859</p>
//           <div className="nft-stats1">
//             <div><FaEye /> 200</div>
//             <div><FaHeart /> 185</div>
//             <FaShareAlt />
//           </div>
//           <div className="nft-creator1">
//             <img src="https://png.pngtree.com/png-clipart/20230108/original/pngtree-nft-avatar-vector-element-png-image_8887536.png" alt="Millar Smith" className="creator-avatar1" />
//             <div>
//               <p className="creator-name1">Millar Smith</p>
//               <p className="creator-email1">hitam@gmail.com</p>
//             </div>
//           </div>
//           <div className="nft-bid-info1">
//             <p>Current Bid: <strong>2.55 ETH</strong></p>
//             <p>Auction Time: <strong>20h 45m 15s</strong></p>
//           </div>
//           <p className="nft-description1">
//             Unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable...
//           </p>
//           <div className="nft-actions1">
//             <button className="sell-now-btn1" onClick={openSellModal}>Sell</button>
//             <SellModal isOpen={isSellModalOpen} onClose={closeSellModal} />
//             <button className="place-bid-btn1" onClick={openBuyModal}>Buy Now</button>
//             <BuyModal isOpen={isBuyModalOpen} onClose={closeBuyModal} />
//           </div>
//           <div className="nft-bids-section1">
//             <h2>Bids</h2>
//             <div className="tab-navigation1">
//                 <span className="active-tab1">Bids</span>
//                 <span>Info</span>
//                 <span>Activity</span>
//             </div>
//             {bids.map((bid, index) => (
//                 <div key={index} className="nft-bid-item1">
//                     <div className="bid-details1">
//                         <img src={bid.avatar} alt={bid.name} className="bid-avatar1" />
//                         <div className="bid-info1">
//                             <p className="bid-name1">{bid.name} <span className="bid-action1">placed a bid</span></p>
//                             <p className="bid-time1">{bid.time}</p>
//                         </div>
//                     </div>
//                     <div className="bid-amount-section1">
//                         <p className="bid-amount1">{bid.bid}</p>
//                         <p className="usd-amount1">{bid.usd}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NFTDetail;




import React,{useState} from "react";
import "./NFTDetail.scss";
import { FaEye, FaHeart, FaShareAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import ShareNFTModal from "../ShareNFTModal/ShareNFTModal";
import BuyModal from "../BuyModal/BuyModal";
import SellModal from "../SellModal/SellModal";
import { RiArrowDropDownLine,RiLayoutGrid2Line } from "react-icons/ri";
import { IoClose,IoShare } from "react-icons/io5";
import { BsFillTagsFill } from "react-icons/bs";
import { PiArrowsDownUpBold } from "react-icons/pi";
import { FaEthereum,FaDiscord,FaTwitter,FaHandshake } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { RiBarChartHorizontalFill,RiLayout4Fill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { IoMdMore,IoIosMore,IoMdCart } from "react-icons/io";
import { BiSolidCommentDetail } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa6";


const NFTDetail = () => {
  const bids = [
    { name: "Esther Howard", avatar: "https://png.pngtree.com/png-clipart/20230108/original/pngtree-nft-avatar-vector-element-png-image_8887536.png", bid: "2.65 ETH", time: "3 hours ago" },
    { name: "Robert Fox", avatar: "https://png.pngtree.com/png-clipart/20230108/original/pngtree-nft-avatar-vector-element-png-image_8887536.png", bid: "2.65 ETH", time: "3 hours ago" },
    { name: "Bessie Cooper", avatar: "https://png.pngtree.com/png-clipart/20230108/original/pngtree-nft-avatar-vector-element-png-image_8887536.png", bid: "2.65 ETH", time: "3 hours ago" },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);

  const openSellModal = () => setIsSellModalOpen(true);
  const closeSellModal = () => setIsSellModalOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openBuyModal = () => setIsBuyModalOpen(true);
  const closeBuyModal = () => setIsBuyModalOpen(false);

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
              <img src="../img/collection.png" alt="" />
              <div className="item_img_detail_con1">
                <img src="../img/collection.png" alt="" />
                <img src="../img/collection.png" alt="" />
                <img src="../img/collection.png" alt="" />
                <img src="../img/collection.png" alt="" />
              </div>
            </div>
            <div className="description_nft_con1">
              <div className="title_con1">
                <RiBarChartHorizontalFill className="icon_RiBarChartHorizontalFill"/>
                <p>Description</p>
              </div>
              <div className="by_user_create_nft_con1">
                <p>By <span><a href="#">88B223</a></span></p>
              </div>
              <div className="about_nft_detail_con1">
                <div className="title_about_nft_detail_con1">
                  <div className="title_about_con1_left">
                    <RiLayout4Fill/>
                  <p>About Gomble spacekids</p>
                  </div>
                  <RiArrowDropDownLine className="icon_open_close_nft_page"/>
                </div>
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
                
              </div>
              <div className="detail_nft_con1">
                <div className="title_detail_con1">
                  <div className="title_detail">
                    <BiSolidCommentDetail className="icon_BiSolidCommentDetail"/>
                    <p>Detail</p>
                  </div>
                  <RiArrowDropDownLine className="icon_open_close_nft_page"/>
                </div>
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
              </div>
            </div>
          </div>
          
        </div>
        <div className="right_detail_page_con1">
          <div className="right_detail_page_con1_main">
            <div className="info_nft_right_con1">
              <div className="action_con1">
                <a href="#">Gomble spacekids</a>
                <div className="action__con1">
                  <FaHandshake/>
                  <IoShare/>
                  <IoIosMore/>
                </div>
              </div>
              <div className="name_nft_con1">
                <h3>GOMBLE - SpaceKids: Pill</h3>
                <p>Owner by <span><a href="#">DB64FF</a></span></p>
              </div>
              <div className="view_nft_con1">
                <div className="view_nft__con1">
                   <FaEye/>
                    <p>40 View</p>
                </div>
                <div className="favorite_nft__con1">
                  <FaHeart/>
                  <p>2 Favorite</p>
                </div>
               
              </div>
            </div>
            <div className="sale_nft_right_con1">
              <div className="time_sale__con1">
                <p>Sale ends October 8, 2024 at 10:53 PM </p>
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
                <h4>0.13 ETH <span>$316.62</span></h4>
                
              </div>
              <div className="buy__con1">
                <div className="btn__buy__con1">
                  <button className="btn_buy">Buy now</button>
                  <button className="btn_add_cart"><IoMdCart className="icon_cart_btn"/></button>
                </div>
                <div className="btn__make_offer__con1">
                  <button className="btn_make_offer">Make offer</button>
                </div>
              </div>
            </div>
            <div className="price_history_right_con1">
              <div className="title_price_history__con1">
                <div className="title_price__con">
                  <FaChartLine/>
                  <p>Price history</p>
                </div>
                <RiArrowDropDownLine className="icon_open_close_nft_page"/>
              </div>
              <div className="chart_price_history__con1">
                <p>đây là biểu đồ</p>
              </div>
            </div>
            <div className="listings_right_con1">
              <div className="title_listing__con1">
                <div className="title__con">
                  <BsFillTagsFill/>
                <p>Listings</p>
                </div>
                <RiArrowDropDownLine className="icon_open_close_nft_page"/>
              </div>
              <div className="listing_value__con1">
                <div className="listing_item_title__con1">
                  <div className="price_and_usd_price">
                    <p>Price</p>
                  </div>
                  <div className="quantity_list">
                    <p>Quantity</p>
                  </div>
                  <div className="expiration_list">
                    <p>Expiration</p>
                  </div>
                  <div className="from_list">
                    <p>From</p>
                  </div>
                 <div className="action_list">
                  <p>Action</p>
                 </div>
                </div>

                 <div className="listing_item__con1">
                  <div className="price_and_usd_price1">
                    <p>0.13 ETH</p>
                    <p>$316.62</p>
                  </div>
                  <div className="quantity_list">
                    <p>1</p>
                  </div>
                  <div className="expiration_list">
                    <p>In 12 minutes</p>
                  </div>
                  <div className="from_list">
                    <a href="">DB64FF</a>
                  </div>
                  <div className="action_list">
                    <button>Buy</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="offers_right_con1">
              <div className="title">
                <p>Offers</p>
                <RiArrowDropDownLine/>
              </div>
              <div className="offer_con">
                <div className="offer_item_title">
                  <p>Price</p>
                  <p>USD Price</p>
                  <p>Quantity</p>
                  <p>Floor difference</p>
                  <p>Expiration</p>
                  <p>From</p>
                </div>
                <div className="offer_item">
                  <p>0.1101 WETH</p>
                  <p>$267.99</p>
                  <p>1</p>
                  <p>13% below</p>
                  <p>in 5 hours</p>
                  <a href="#">YuraYara</a>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      <div className="nft_detail_page_container2">
        <div className="nft_detail_page_con2">
          <div className="header_con2">
            <div className="title_header_con2">
                <PiArrowsDownUpBold className="icon_item_activity"/>
                <p>Item Activity</p>
              </div>
              <div className="open_close_con2">
                <RiArrowDropDownLine className="icon_open_close_nft_page"/>
              </div>   
        </div>
        <div className="body_con2">
          <div className="filter_body_con2">
            <div className="title_filter_con2">
              <p>Filter</p>
              <RiArrowDropDownLine className="icon_dropdown_filter_con2"/>
            </div>
            <div className="filter_con2">
              <div className="item_filter_con2">
                <p>Sales</p>
                <IoClose/>
              </div>
               <div className="item_filter_con2">
                <p>Listings</p>
                <IoClose/>
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
                <BsFillTagsFill className="icon_list_con2"/>
                 <p>List</p>
              </div>
              <p>0.1265 ETH</p>
              <a href="#">YuraYuraGay</a>
              <a href="#"></a>
              <p>31m ago</p>
            </div>
            <div className="item_activity_con2">
              <div className="list_con2">
                <BsFillTagsFill className="icon_list_con2"/>
                 <p>List</p>
              </div>
              <p>0.1265 ETH</p>
              <a href="#">YuraYuraGay</a>
              <a href="#">YuraYuraGay</a>
              <p>31m ago</p>
            </div>
          </div>
        </div>
        </div>
        
      </div>
      <div className="nft_detail_page_container3">
        <div className="nft_detail_page_con3">
          <div className="header_con3">
          <div className="title_con3">
            <RiLayoutGrid2Line className="icon_nft_detail_page"/>
            <p>More from this collection</p>
          </div>
          <div className="open_close_con3">
             <RiArrowDropDownLine className="icon_open_close_nft_page"/>
          </div>
        </div>
        <div className="body_container3">
          {/* có thể lướt ngang */}
          {dummyData.map((nft, index) => (
          <div key={index} className="item_nft_con3">
            <img src={nft.image} alt="" />
            <div className="detail_nft_con3">
              <div className="info_con3">
                <h3>{nft.name}</h3>
                <h4>{nft.price}</h4>
                <p>Last sale : {nft.lastSale}</p>
              </div>
              <div className="btn_buy_cart_con3">
                <div className="buy_con3">Buy</div>
                <div className="cart_con3">Cart</div>
              </div>
            </div>
          </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail;
