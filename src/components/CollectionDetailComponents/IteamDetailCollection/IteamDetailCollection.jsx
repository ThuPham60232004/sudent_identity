import React, { useState } from 'react';
import './IteamDetailCollection.css';
import { FaAngleLeft, FaRegHeart } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import NFTDetail from '../../DashboardComponent/NFTDetail/NFTDetail';

const IteamDetailCollection = () => {
  const [selectedNFT, setSelectedNFT] = useState(null);

  const type = [
    { nametype: "Art" },
    { nametype: "Gaming" },
    { nametype: "Music" },
    { nametype: "Fashion" }
  ];

  const mockItems = [
    {
      imageSrc: 'https://ichef.bbci.co.uk/news/480/cpsprodpb/DBB7/production/_122074265_hi071843849.jpg.webp',
      creator: 'Eaton Jones',
      nftName: 'NFTLab#1',
      endDate: 'Ends in 1 year, 8 months',
      likes: 4,
      price: '0.52 ETH',
      smallImageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5spyvVxk6Hqtp0Pcwh-pgk5LbvafnxwEfw&s'
    },
    {
      imageSrc: 'https://th.bing.com/th/id/OIP.dYV00oMaFWUn4Q0QibkaUgHaHa?rs=1&pid=ImgDetMain',
      creator: 'Eaton Jones',
      nftName: 'NFTLab#1',
      endDate: 'Ends in 1 year, 8 months',
      likes: 4,
      price: '0.52 ETH',
      smallImageSrc: 'https://th.bing.com/th/id/OIP.dYV00oMaFWUn4Q0QibkaUgHaHa?rs=1&pid=ImgDetMain'
    }
  ];

  const handleItemClick = (item) => {
    setSelectedNFT(item);
  };

  return (
    <div className="IteamDetailCollectionContainer">
      {selectedNFT ? (
        <NFTDetail item={selectedNFT} /> 
      ) : (
        <>
          <div className="FilterItem">
            <div className="FilterItemLeft">
              <FaAngleLeft />
              <p>Filter</p>
            </div>
            <div className="FilterItemRight">
              {type.map((typeCollection, index) => (
                <div className='FilterItemType' key={index}>
                  <p>{typeCollection.nametype}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="IteamDetailCollectionBody">
            <div className="IteamDetailCollectionLeft">
              <div className="Price_filter_collection_detail_page">
                <h3>Price</h3>
                <div className="min_max_price_filter_collection">
                  <input type="text" placeholder='Min' className='input_value_price_min' />
                  <input type="text" placeholder='Max' className='input_value_price_max' />
                </div>
                <div className="btn_apply_filter_price">
                  <button className='btn_apply_price'>APPLY</button>
                </div>
              </div>

              <div className="Item_type_filter_collection_detail_page">
                <h3>Item Type</h3>
                <div className="item_type_small_collection">
                  <div className="IteamDetailCollectionGrouph"><p>All</p></div>
                  <div className="IteamDetailCollectionGrouph"><p>Auction</p></div>
                  <div className="IteamDetailCollectionGrouph"><p>Buy Now</p></div>
                </div>
              </div>

              <div className="Sort_filter_collection_detail_page">
                <h3>Sort</h3>
                <div className="sort_filter_small_collection">
                  <div className="IteamDetailCollectionGrouph"><p>Name ASC</p></div>
                  <div className="IteamDetailCollectionGrouph"><p>Name DESC</p></div>
                  <div className="IteamDetailCollectionGrouph"><p>Price ASC</p></div>
                  <div className="IteamDetailCollectionGrouph"><p>Price DESC</p></div>
                  <div className="IteamDetailCollectionGrouph"><p>Latest</p></div>
                  <div className="IteamDetailCollectionGrouph"><p>Oldest</p></div>
                </div>
              </div>
            </div>

            <div className="Item_container_right_main">
              <div className="IteamDetailCollectionRight">
                {mockItems.map((item, index) => (
                  <div key={index} className="IteamDetailCollectionRightContainer" onClick={() => handleItemClick(item)}>
                    <img 
                      src={item.imageSrc}
                      alt='detailimg'
                      className='detailimg'
                    />
                    <div className="IteamDetailCollectionRightSmallContainer">
                      <img
                        src={item.smallImageSrc}
                        alt='detailimgsmall'
                        className='detailimgsmall'
                      />
                      <div className="info_user_item_collection_right_small">
                        <h3>Creator</h3>
                        <div className="name_user_small">
                          <h4>{item.creator}</h4>
                          <HiCheckCircle className='icon_huyhieu_user_small'/>
                        </div>
                      </div>
                    </div>
                    <div className="br"></div>
                    <div className="info_collection_small">
                      <div className="name_date_created_collection_small">
                        <h3>{item.nftName}</h3>
                        <p>{item.endDate}</p>
                      </div>
                      <div className="heart_view_container">
                        <div className="heart_view_collection_small">
                          <FaRegHeart/>
                          <p>{item.likes}</p>
                        </div>
                      </div>
                    </div>
                    <div className="price_collection_small">
                      <p>Price</p>
                      <h3>{item.price}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default IteamDetailCollection;
