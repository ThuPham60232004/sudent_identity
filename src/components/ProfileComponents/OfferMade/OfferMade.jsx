
import './OfferMade.css';

import React, { useState } from 'react';
import { FaBars} from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { RiArrowDropDownLine,RiLayoutGrid2Line ,RiLayoutGridLine} from "react-icons/ri";
import { FaListUl } from "react-icons/fa6";
import { LuLayoutPanelLeft } from "react-icons/lu";

const OfferMade = () => {

  const [isOpenCollections, setIsOpenCollections] = useState(false);
    const toggleOpenCloseCollections = () => {
    setIsOpenCollections(!isOpenCollections);
  };


  return (
    <div className="offer-made-container">
<div className="filter_search_profile">
        <div className="bo_loc_fabar">
          <FaBars className='icon_profile_page'/>          
        </div>
        <div className="status_profile">
          <p>Type</p>
          <RiArrowDropDownLine className='icon_profile_page'/>
        </div>
          <div className="chains_profile">
            <p>Status</p>
            <RiArrowDropDownLine className='icon_profile_page'/>
          </div>
                
            </div> 
<div className="offer_made_body">
    <div className="offer_made_sidebar_body_left">
      <div className="item_sidebar_collected">
        <div className="title_item_sidebar_collected_con1" onClick={toggleOpenCloseCollections}>
          <h3 className="title_collected_con1">Collections</h3>
          <RiArrowDropDownLine className={`icon_dropdown_collected_sidebar ${isOpenCollections ? 'open' : 'closed'}`} />
        </div>
        {isOpenCollections && (
          <div className="content_item_sidebar_collected_con2 open">
            <input type="text" placeholder="Search" className="filter_sidebar_search_input" />
            <IoMdSearch className="icon_search_filter_item_sidebar_collected_Con2" />
            <div className="result_search_item_sidebar_collected_con2">
              <div className="title_result_collection_value_item_sidebar_con2">
                <p>Collection</p>
                <p>Value</p>
              </div>
              <div className="result_value">
                <div className="result_value_item">
                  <div className="result_value_con1">
                    <img
                      src="https://dxagroup.io/wp-content/uploads/Blog/CuratingthePerfectNFTArtCollectionExpertTips/cacurating-the-perfect-nft-art-collection-expert-tips-10.webp"
                      alt="NFT Collection"
                      className="image_result_value_con1"
                    />
                  </div>
                  <div className="result_value_con2">
                    <div className="title_result_value_con2">
                      <p>Sprotoladys</p>
                      <p>1.785 ETH</p>
                    </div>
                    <div className="list_floor_result_value_con2">
                      <p>Listed: 0/9</p>
                      <p>Floor: 0.00006 ETH</p>
                    </div>
                  </div>
                </div>
                 <div className="result_value_item">
                  <div className="result_value_con1">
                    <img
                      src="https://dxagroup.io/wp-content/uploads/Blog/CuratingthePerfectNFTArtCollectionExpertTips/cacurating-the-perfect-nft-art-collection-expert-tips-10.webp"
                      alt="NFT Collection"
                      className="image_result_value_con1"
                    />
                  </div>
                  <div className="result_value_con2">
                    <div className="title_result_value_con2">
                      <p>Sprotoladys</p>
                      <p>1.785 ETH</p>
                    </div>
                    <div className="list_floor_result_value_con2">
                      <p>Listed: 0/9</p>
                      <p>Floor: 0.00006 ETH</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      <div className="offer_made_container_body">
        <div className="offer_made_container_con">
          <p>No items to display</p>
        </div>
      </div>
</div>
     
    </div>
  );
};

export default OfferMade;
