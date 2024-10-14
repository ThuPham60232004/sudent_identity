import React, { useState } from 'react';
import './Created.css';
import { FaBars} from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { RiArrowDropDownLine,RiLayoutGrid2Line ,RiLayoutGridLine} from "react-icons/ri";
import { FaListUl } from "react-icons/fa6";
import { LuLayoutPanelLeft } from "react-icons/lu";

const items = [
  { id: 1, name: 'LEONARD', description: 'Shooting Zombie', quantity: 'x100', image: 'https://i.seadn.io/s/raw/files/9ce72afdc86e5bd347faf0cd35c75bb8.png?auto=format&dpr=1&w=750' },
  { id: 2, name: 'ADAM', description: 'Shooting Zombie', quantity: 'x5', image: 'https://i.seadn.io/s/raw/files/485e1f1c46d62eb9027f24d7910ac9ab.png?auto=format&dpr=1&w=750' },
  { id: 3, name: 'AN', description: 'Shooting Zombie', quantity: 'x2', image: 'https://i.seadn.io/s/raw/files/8ebe52a0b736dbf95611b7a4a6b93229.png?auto=format&dpr=1&w=750' },
  { id: 4, name: 'AK', description: 'Shooting Zombie', quantity: 'x1', image: 'https://i.seadn.io/s/raw/files/575793ccc5d7ea73d606f2ad6b827dc1.png?auto=format&dpr=1&w=750' }
];

const Created = () => {


   const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const handleChange = (event) => {
    setSelectedCurrency(event.target.value);
  };


const [isOpenCollections, setIsOpenCollections] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [isOpenCurrency, setIsOpenCurrency] = useState(false);

  // Hàm toggle cho Collections
  const toggleOpenCloseCollections = () => {
    setIsOpenCollections(!isOpenCollections);
  };

  // Hàm toggle cho Price
  const toggleOpenClosePrice = () => {
    setIsOpenPrice(!isOpenPrice);
  };

  // Hàm toggle cho Currency
  const toggleOpenCloseCurrency = () => {
    setIsOpenCurrency(!isOpenCurrency);
  };



  return (
    <div className="create_contaner_parent">

     <div className="collected-img-card">
      <div className="collected-img-content">
        <img 
          src="https://i.seadn.io/s/raw/files/bfaaed20d8ee36d39e55cf77aa0b0cf6.jpg?auto=format&dpr=1&h=500" 
          alt="Shooting Zombie" 
          className="collected-img-picture" 
        />
        <div className="collected-img-details">
          <h2 className="collected-img-title">Shooting Zombie</h2>
          <div className="collected-img-info">
            <div className="collected-img-floor">
              <h4>Floor</h4>
              <p>—</p>
            </div>
            <div className="collected-img-volume">
              <h4>Total volume</h4>
              <p>0 ETH</p>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="filter_search_created_con2">
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
                    <input type="text" className='search_input_profile' placeholder='Searching for..'/>
                    <IoMdSearch className='icon_search_profile_page'/>
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
      </div>

    <div className="creater_container_con3">
        <div className="sidebar_created_container_left_con3">
          
            {/* Phần Collections */}
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
                      {/* Thêm các bộ sưu tập khác tương tự */}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Phần Price */}
            <div className="item_sidebar_collected">
              <div className="title_item_sidebar_collected_con1" onClick={toggleOpenClosePrice}>
                <h3>Price</h3>
                <RiArrowDropDownLine className={`icon_dropdown_collected_sidebar ${isOpenPrice ? 'open' : 'closed'}`} />
              </div>
              {isOpenPrice && (
                <div className="content_item_sidebar_collected_con3 open">
                  <div className="select_price_usd_content_item">
                    <select>
                      <option value="USD">USD</option>
                      <option value="ETH">ETH</option>
                      <option value="SOL">SOL</option>
                    </select>
                  </div>
                  <div className="min_max_value_price_content_item">
                    <div className="min_max_price_value_con1">
                      <input type="number" placeholder="Min" className="input_value_min_max_price_con" />
                    </div>
                    <p className="min_max_price_value_con2">To</p>
                    <div className="min_max_price_value_con3">
                      <input type="number" placeholder="Max" className="input_value_min_max_price_con" />
                    </div>
                  </div>
                  <button className="btn_aplly_item_sidebar_con3">Apply</button>
                </div>
              )}
            </div>

            {/* Phần Currency */}
            <div className="item_sidebar_collected">
              <div className="title_item_sidebar_collected_con1" onClick={toggleOpenCloseCurrency}>
                <h3>Currency</h3>
                <RiArrowDropDownLine className={`icon_dropdown_collected_sidebar ${isOpenCurrency ? 'open' : 'closed'}`} />
              </div>
              {isOpenCurrency && (
                <div className="content_item_sidebar_collected_con2 open">
                  <input type="text" placeholder="Search" className="filter_sidebar_search_input" />
                  <IoMdSearch className="icon_search_filter_item_sidebar_collected_Con2" />
                  <div className="check_box_item_currency">
                    <div className="checkbox_group_currency">
                      <input type="checkbox" />
                      <label>ETH</label>
                    </div>
                    <div className="checkbox_group_currency">
                      <input type="checkbox" />
                      <label>WETH</label>
                    </div>
                  </div>
                </div>
              )}
            </div>
         
        </div>
        <div className="created-items">
          <div className="items-header">4 items</div>
            <div className="items-grid">
              {items.map((item) => (
                <div className="item-card" key={item.id}>
                  {/* <div className="item-quantity">{item.quantity}</div> */}
                  <img src={item.image} alt={item.name} className="item-image-created" />
                  <div className="content_item_card_created">
                     <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                   
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Created;
