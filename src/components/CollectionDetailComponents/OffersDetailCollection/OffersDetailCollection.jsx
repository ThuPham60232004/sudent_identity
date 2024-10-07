import React from 'react'
import { FaBars } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import "./OffersDetailCollection.css";


const OffersDetailCollection = () => {

  const offer = [
        {
            price: '0.0019',
            totalVolume: '0.0003',
            totalOffers: 10,
            bidderProfileImage: 'https://th.bing.com/th/id/OIP.aDgOpbQivgGVc2YIYLb5-gHaE8?rs=1&pid=ImgDetMain', 
            bidders: '2',
            yourOffers: '0.5 WETH'
        },
        {
            price: '0.0017',
            totalVolume: '0.0002',
            totalOffers: 8,
            bidderProfileImage: 'https://img.freepik.com/premium-photo/beautiful-portrait-full-body-style-generative-ai_947227-1398.jpg',
            bidders: '1',
            yourOffers: '0.3 WETH'
        },
           {
            price: '1.5',
            totalVolume: '100',
            totalOffers: 10,
            bidderProfileImage: 'https://th.bing.com/th/id/OIP.thIM7D6Cu_8jH2j6ZRPVQwHaHa?w=1960&h=1960&rs=1&pid=ImgDetMain', 
            bidders: '1',
            yourOffers: '0.5 WETH'
        },
        {
            price: '1.2',
            totalVolume: '80',
            totalOffers: 8,
            bidderProfileImage: 'https://th.bing.com/th/id/OIP.thIM7D6Cu_8jH2j6ZRPVQwHaHa?w=1960&h=1960&rs=1&pid=ImgDetMain',
            bidders: '4',
            yourOffers: '0.3 WETH'
        },
    ];

  return (
    <div className="offers_detail_collection_container">
      <div className="filter_offers">
        <div className="left_filter_offers">
          <div className="icon_bars_container_offers">
            <FaBars className='icon_bars_offers_collection'/>
          </div>
          <p>113 Offers</p>
        </div>
        <div className="right_filter_offers">
          <div className="offer_small_group">
            <p>Volume</p>
            <h3>98 ETH</h3>
          </div>
            <div className="offer_small_group">
            <p>Floor</p>
            <h3>98 ETH</h3>
          </div>
            <div className="offer_small_group">
            <p>Best offer</p>
            <h3>98 ETH</h3>
          </div>
            <div className="offer_small_group">
            <p>Total offer volume</p>
            <h3>98 ETH</h3>
          </div>
        </div>
      </div>
      <div className="offers_detail_collection_body">
        <div className="left_offers_container">
          <div className="filter_search_offers">
            <h3>Filter</h3>
            <div className="search_input_offers">
              <input type="search" placeholder='Search' />
              <IoMdSearch className='icon_search_offers_collection'/>
            </div>
          </div>

          <div className="trait_top_offer">
            <div className="title_trait_top_offer">
              <p>TRAIT</p>
              <p>TOP  OFFER</p>
            </div>
            <div className="value_trait_top_offer">
              <div className="value_trait">
                <p>No trait</p>
              </div>
              <div className="value_top_offer">
                <h3>0.0053 ETH</h3>
                <p>Volume: 0.9223 WETH</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right_offers_container_main">
            <div className="offers_table_detail_con">
              <div className="title_offers_table">
               <p className='offer_price_title'>Offer price</p>
               <p className='total_volume_title'>Total volume</p>
               <p className='total_offers_title'>Total offers</p>
               <p className='bidders_title'>Bidders</p>
               <p className='your_offer_title'> Your offers</p>
              </div>
              {offer.map((offer, index) => (
              <div key={index} className="content_offers_table">
                <div className="offer_price_content">
                  <p>{offer.price} WETH</p>
                </div>
                <div className="total_volume_content">
                  <p>{offer.totalVolume} WETH</p>
                </div>
                <div className="total_offers_content">
                  <p>{offer.totalOffers}</p>
                </div>
                <div className="bidders_content">
                  <img src={offer.bidderProfileImage} alt="" />
                  <p>{offer.bidders}</p>
                </div>
                <div className="your_offer_content">
                  <p>{offer.yourOffers}</p>
                </div>
              </div>
                   ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default OffersDetailCollection


