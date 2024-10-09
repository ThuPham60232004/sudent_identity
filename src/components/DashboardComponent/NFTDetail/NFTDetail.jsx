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
  return (
    <div className="nft_detaile_page">
      <div className="container1">
        <div className="left_container">
          <div className="image_nft">
            <img src="../img/collection.png" alt="" />
          </div>
          <div className="description_detail">
            <div className="title">
              <RiArrowDropDownLine/>
              <p>Description</p>
            </div>
            <div className="by_user">
              {/* dẫn tới trang người tạo */}
              <p>By <span><a href="#">88B223</a></span></p>
            </div>
            <div className="about_nft">
              <div className="title_about">
                <p>About Gomble spacekids</p>
                <RiArrowDropDownLine/>
              </div>
              <div className="detail">
                <p>GOMBLE's PFP Collection: SpaceKids NFTs unlock exclusive benefits and access to some of the largest token allocations in GOMBLE’s universe. Dive into the dynamic gameplay and secure your place among the stars with these limited-edition NFTs. Don’t miss this last chance to power up your game and take your collection to new heights!</p>
              </div>
              <div className="link">
                <RiArrowDropDownLine/>
                <RiArrowDropDownLine/>
                <RiArrowDropDownLine/>
                <RiArrowDropDownLine/>
                <p>có nhiều icon ở đây</p>
              </div>
            </div>
            <div className="detail nft">
              <div className="title_detail">
                <p>Detail</p>
                <RiArrowDropDownLine/>
              </div>
              <div className="content_detail">
                <div className="item_content">
                  <p>Contract Address</p>
                  <a href="#">0x606e...1081</a>
                </div>
                 <div className="item_content">
                  <p>Token ID</p>
                  <p>1316</p>
                </div>
                <div className="item_content">
                  <p>Token Standard</p>
                  <p>1316</p>
                </div>
                <div className="item_content">
                  <p>Chain</p>
                  <p>ERC-721</p>
                </div>
                <div className="item_content">
                  <p>Last Updated</p>
                  <p>13 days ago</p>
                </div>
                <div className="item_content">
                  <p>Creator Earnings</p>
                  <p>1%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right_container">
            <div className="info_nft">
              <div className="action_con">
                <a href="#">Gomble spacekids</a>
                <div className="action">
                  <RiArrowDropDownLine/>
                  <RiArrowDropDownLine/>
                  <RiArrowDropDownLine/>
                </div>
              </div>
              <div className="name_nft">
                <h3>GOMBLE - SpaceKids: Pill</h3>
                <p>Owner by <span><a href="#">DB64FF</a></span></p>
              </div>
              <div className="view">
                <FaEye/>
                <p>View</p>
              </div>
            </div>
            <div className="sale_nft">
              <div className="time_sale">
                 <p>Sale ends October 8, 2024 at 10:53 PM </p>
                <div className="time_con">
                  <p>00</p>
                  <p>Hours</p>
                </div>
                <div className="time_con">
                  <p>17</p>
                  <p>Minutes</p>
                </div>
                <div className="time_con">
                  <p>57</p>
                  <p>Seconds</p>
                </div>
              </div>
              <div className="price_con">
                <p>Current price</p>
                <div className="price">
                  <h4>0.13 ETH</h4>
                  <p>$316.62</p>
                </div>
              </div>
              <div className="buy_con">
                <div className="buy">
                  <button>Buy now <BuyModal/></button>
                </div>
                <div className="make_offer">
                  <button><BuyModal/>Make offer</button>
                </div>
              </div>
            </div>
            <div className="price_history">
              <div className="title">
                <p>Price history</p>
                <RiArrowDropDownLine/>
              </div>
              <div className="chart_con">
                <p>đây là biểu đồ</p>
              </div>
            </div>
            <div className="listings">
              <div className="title">
                <p>Listings</p>
                <RiArrowDropDownLine/>
              </div>
              <div className="listing_con">
                <div className="listing_item_title">
                  <p>Price</p>
                  <p>USD Price</p>
                  <p>Quantity</p>
                  <p>Expiration</p>
                  <p>From</p>
                  <p>Action</p>
                </div>
                 <div className="listing_item">
                  <p>0.13 ETH</p>
                  <p>$316.62</p>
                  <p>1</p>
                  <p>In 12 minutes</p>
                  <a href="DB64FF"></a>
                  <button>Buy</button>
                </div>
              </div>
            </div>
            <div className="offers">
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
      <div className="container2">
        <div className="header">
          <div className="title">
            <RiArrowDropDownLine/>
            <p>Item Activity</p>
          </div>
          <div className="open_close">
            <RiArrowDropDownLine/>
          </div>
        </div>
        <div className="body">
          <div className="filter">
            <p>Filter</p>
            <RiArrowDropDownLine/>
          </div>
          <div className="content">
            <div className="title_item_activity">
              <p>Event</p>
              <p>Price</p>
              <p>From</p>
              <p>To</p>
              <p>Date</p>
            </div>
            <div className="item_activity">
              <div className="list_con">
                <RiArrowDropDownLine/>
                 <p>List</p>
              </div>
              <p>0.1265 ETH</p>
              <p>E239FD</p>
              <p>-</p>
              <p>31m ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container3">
        <div className="header">
          <div className="title">
            <RiLayoutGrid2Line/>
            <p>More from this collection</p>
          </div>
          <div className="open_close_container3">
             <RiArrowDropDownLine/>
          </div>
        </div>
        <div className="body">
          {/* có thể lướt ngang */}
          <div className="item_nft">
            <img src="../img/collection.png" alt="" />
            <div className="detail_nft">
              <div className="info">
                <h3>name</h3>
                <p>0.17 ETH</p>
                <p>Last sale : 0.13 WETH</p>
              </div>
              <div className="btn_buy_cart">
                <div className="buy">Buy</div>
                <div className="cart">Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail;
