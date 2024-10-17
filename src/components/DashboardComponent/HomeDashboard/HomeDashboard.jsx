import React,{useState, useContext } from 'react'
import { RiArrowDropDownLine,RiUserAddFill } from "react-icons/ri";
import { FaBell ,FaChartLine,FaCartArrowDown} from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { GrFormPrevious,GrFormNext } from "react-icons/gr";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ItemContext } from '../../../context/ItemContext';
import "./HomeDashboard.css"
import { useNavigate } from 'react-router-dom';
const HomeDashboard = () => {
  const navigate = useNavigate();
  const { setItem } = useContext(ItemContext);
    const data = [
    { name: 'Level 1', value: 4000 },
    { name: 'Level 2', value: 3000 },
    { name: 'Level 3', value: 2000 },
    { name: 'Level 4', value: 2780 },
    { name: 'Level 5', value: 1890 },
  ];

  const handleNftClick = (nft) => {
    setItem(nft); 
    navigate('/CollectionDetailPage/overview'); 
};

const handleTrendingClick = (item) => {
    setItem(item); 
    navigate('/CollectionDetailPage/overview');
};

const topProducts = [
  { id: 1, name: "Product A", popularity: 85, sales: '80%' },
  { id: 2, name: "Product B", popularity: 25, sales: '62%' },
  { id: 3, name: "Product C", popularity: 90, sales: '30%' },
  { id: 4, name: "Product D", popularity: 60, sales: '24%' },
];

  const customerData = [
    { name: 'Customer A', fulfillment: 80 },
    { name: 'Customer B', fulfillment: 60 },
    { name: 'Customer C', fulfillment: 90 },
    { name: 'Customer D', fulfillment: 75 },
  ];

  const nftData = [
  {
    stt: 1,
    collectionType: "Art",
    image: "https://th.bing.com/th/id/OIP.rHd9SCnLe9nk0ngHF0hKBAAAAA?w=474&h=711&rs=1&pid=ImgDetMain",
    name: "Digital Art Piece",
    floorPrice: "2.5 ETH",
    volume: "10K",
    views: 1500,
  },
  {
    stt: 2,
    collectionType: "Music",
    image: "https://th.bing.com/th/id/OIP.Wbov41Q_JiEvkOqaBZOAIAHaE8?rs=1&pid=ImgDetMain",
    name: "Rare Track",
    floorPrice: "1.8 ETH",
    volume: "8.2K",
    views: 1200,
  },
  {
    stt: 3,
    collectionType: "Gaming",
    image: "https://th.bing.com/th/id/OIP.kGbNk6wMmDZ9aul31NxrCAAAAA?w=443&h=626&rs=1&pid=ImgDetMain",
    name: "Gaming NFT",
    floorPrice: "3.2 ETH",
    volume: "12.5K",
    views: 2000,
  },
  {
    stt: 4,
    collectionType: "Photography",
    image: "https://th.bing.com/th/id/OIP.et3StuDx38d8-pKRJndFLQHaNK?w=576&h=1024&rs=1&pid=ImgDetMain",
    name: "Landscape Photography",
    floorPrice: "1.3 ETH",
    volume: "5K",
    views: 900,
  },
  {
    stt: 5,
    collectionType: "Art",
    image: "https://th.bing.com/th/id/OIP.rHd9SCnLe9nk0ngHF0hKBAAAAA?w=474&h=711&rs=1&pid=ImgDetMain",
    name: "Digital Art Piece",
    floorPrice: "2.5 ETH",
    volume: "10K",
    views: 1500,
  },
  {
    stt: 6,
    collectionType: "Music",
    image: "https://th.bing.com/th/id/OIP.Wbov41Q_JiEvkOqaBZOAIAHaE8?rs=1&pid=ImgDetMain",
    name: "Rare Track",
    floorPrice: "1.8 ETH",
    volume: "8.2K",
    views: 1200,
  },
  {
    stt: 7,
    collectionType: "Gaming",
    image: "https://th.bing.com/th/id/OIP.kGbNk6wMmDZ9aul31NxrCAAAAA?w=443&h=626&rs=1&pid=ImgDetMain",
    name: "Gaming NFT",
    floorPrice: "3.2 ETH",
    volume: "12.5K",
    views: 2000,
  },
  {
    stt: 8,
    collectionType: "Photography",
    image: "https://th.bing.com/th/id/OIP.et3StuDx38d8-pKRJndFLQHaNK?w=576&h=1024&rs=1&pid=ImgDetMain",
    name: "Landscape Photography",
    floorPrice: "1.3 ETH",
    volume: "5K",
    views: 900,
  },
];



const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage_nft = 5;

  const totalItems = nftData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage_nft);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage_nft;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage_nft;
  const currentItems = nftData.slice(indexOfFirstItem, indexOfLastItem);



const trendingNowData = [
  {
    id: 1,
    name: "CryptoPunks",
    imgSrc: "../img/collection.png",
    floor: "0.005 ETH",
    volume: "4.5 ETH",
    owners: 8
  },
  {
    id: 2,
    name: "Bored Ape Yacht Club",
    imgSrc: "../img/collection.png",
    floor: "1.2 ETH",
    volume: "15.6 ETH",
    owners: 12
  },
  {
    id: 3,
    name: "Art Blocks",
    imgSrc: "../img/collection.png",
    floor: "0.8 ETH",
    volume: "9.3 ETH",
    owners: 10
  },
  {
    id: 4,
    name: "Azuki",
    imgSrc: "../img/collection.png",
    floor: "0.02 ETH",
    volume: "3.2 ETH",
    owners: 5
  },
  {
    id: 5,
    name: "CryptoPunks",
    imgSrc: "../img/collection.png",
    floor: "0.005 ETH",
    volume: "4.5 ETH",
    owners: 8
  },
  {
    id: 6,
    name: "Bored Ape Yacht Club",
    imgSrc: "../img/collection.png",
    floor: "1.2 ETH",
    volume: "15.6 ETH",
    owners: 12
  },
  {
    id: 7,
    name: "Art Blocks",
    imgSrc: "../img/collection.png",
    floor: "0.8 ETH",
    volume: "9.3 ETH",
    owners: 10
  },
  {
    id: 8,
    name: "Azuki",
    imgSrc: "../img/collection.png",
    floor: "0.02 ETH",
    volume: "3.2 ETH",
    owners: 5
  },
];


  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

    const handleNext = () => {
    if (currentIndex < trendingNowData.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const CustomLegend = () => {
  return (
    <div style={{ marginTop: '10px', textAlign: 'center' }}>
      <span style={{ marginRight: '10px', color: 'rgb(201, 53, 102)' }}>● Value</span>
    </div>
  );
};
  return (
    <div className="home_dashboard_container">
      <div className="body_home_dashboard">
        <div className="sales_summary_home_dashboard">
          <h3>Today's Sales</h3>
          <p>Sales Summary</p>
          <div className="sales_summary_container">
            <div className="sales_summary_group">
              <FaChartLine className='icon_sale_summary'/>
              <h3>$5K</h3>
              <h4>Total Sales</h4>
              <p>+10% from yesterday</p>
            </div>

             <div className="sales_summary_group">
              <FaCartArrowDown className='icon_sale_summary'/>
              <h3>500</h3>
              <h4>Total Order</h4>
              <p>+8% from yesterday</p>
            </div>

             <div className="sales_summary_group">
              <IoBagCheckSharp className='icon_sale_summary'/>
              <h3>9</h3>
              <h4>Product Sold</h4>
              <p>+2% from yesterday</p>
            </div>

             <div className="sales_summary_group">
              <RiUserAddFill className='icon_sale_summary'/>
              <h3>12</h3>
              <h4>New Customer</h4>
              <p>+3% from yesterday</p>
            </div>
          </div>
          
        </div>
        <div className="chart_body_home_dashboard">
          <div className="chart_level_home_dashboard">
            <div className="title_chart_con_db">
              <p>Level</p>
            </div>
            <div className="chart_level_con">
              <BarChart width={280} height={250} data={data}>
                <XAxis dataKey="name" hide />
                <Tooltip />
                <Legend content={<CustomLegend />} />
                <Bar 
                  dataKey="value" 
                  fill="rgb(201, 53, 102)" 
                  barSize={20} 
                  radius={[5, 5, 0, 0]} 
                />
              </BarChart>
            </div>
          </div>

      <div className="chart_top_products_home_dashboard">
        <div className="title_chart_con_db">
          <p>Top products</p>
        </div>
        <div className="chart_top_product_con">
          <div className="item_chart_top_product_main">
            <p className='stt'>#</p>
            <p className='name'>Name</p>
            <p className='popularity'>Popularity</p>
            <p className='sale'>Sales</p>
          </div>
          {topProducts.map(product => (
            <div className="item_chart_top_product" key={product.id}>
              <p className='stt'>{product.id}</p>
              <p className='name'>{product.name}</p>
              <div className='popularity' style={{ width: `${product.popularity}%`, backgroundColor: 'rgb(201, 53, 102)', borderRadius: '5px', height: '20px' }}></div>
              <p className='sale'>{product.sales}</p>
            </div>
          ))}
        </div>
      </div>



          <div className="chart_customer_fulfillment_home_dashboard">
            <div className="title_chart_con_db">
              <p>Customer Fulfillment</p>
            </div>
            <div className="chart_customer_fulfillment_con">
                <p>đây là biểu đồ</p>
            </div>
          </div>

          <div className="chart_earnings_home_dashboard">
            <div className="title_chart_con_db">
              <p>Earnings</p>
            </div>
            <div className="chart_earnings_con">
              <p>đây là biểu đồ</p>
            </div>
          </div>

          <div className="chart_visitor_insights_home_dashboard">
            <div className="title_chart_con_db">
              <p>Visitor Insights</p>
            </div>
            <div className="chart_visitor_insights_con">
              <p>đây là biểu đồ</p>
            </div>
          </div>
        

        <div className="trending_now_body_home_dashboard">
          <div className="title_trending_now_con">
            <p>Trending now</p>
            <div className="pre_next">
              <GrFormPrevious className='pre' onClick={handlePrev} />
              <GrFormNext className='next'onClick={handleNext} />
            </div>
          </div>
          <div className="content_trending_now_con">
        {trendingNowData.slice(currentIndex, currentIndex + itemsPerPage).map(item => (
          <div className="trending_now_group_db" key={item.id} onClick={() => handleTrendingClick(item)}>
            <img src={item.imgSrc} alt={item.name} />
            <div className="detail_trending_now_group">
              {/* <p>{item.id}</p> */}
              <h3>{item.name}</h3>
              <div className="detail_value">
                <div className="item_con">
                  <p className='title'>Floor</p>
                  <p>{item.floor}</p>
                </div>
                <div className="item_con">
                  <p className='title'>Volume</p>
                  <p>{item.volume}</p>
                </div>
                <div className="item_con">
                  <p className='title'>Owners</p>
                  <p>{item.owners}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

        </div>
            
       <div className="all_nft_home_dashboard">
      <div className="title_search_nft_con">
        <p>All NFT</p>
        <div className="search_nft_ccon">
          <input type="search" placeholder="Search.." />
          <IoMdSearch className="icon_search_all_nft_home_dashboard" />
        </div>
      </div>

      <div className="detail_table_nft_con">
        <div className="item_nft1">
          <p className="stt_nft">Stt</p>
          <p className="collection_nft">Collection</p>
          <p className="image_nft">Image</p>
          <p className="name_nft">Name</p>
          <p className="floor_price_nft">Floor price</p>
          <p className="volume_nft">Volume</p>
          <p className="view_nft">View</p>
        </div>
        {currentItems.map((nft, index) => (
          <div className="item_nft2" key={index} onClick={() => handleNftClick(nft)}>
            <p className="stt_nft">{nft.stt}</p>
            <p className="collection_nft">{nft.collectionType}</p>
            <img className="image_nft" src={nft.image} alt={nft.name} />
            <p className="name_nft">{nft.name}</p>
            <p className="floor_price_nft">{nft.floorPrice}</p>
            <p className="volume_nft">{nft.volume}</p>
            <p className="view_nft">{nft.views}</p>
          </div>
        ))}
      </div>

      <div className="pagination_all_nft_con">
        <p>
          Showing {indexOfFirstItem + 1} - {indexOfLastItem > totalItems ? totalItems : indexOfLastItem} out of {totalItems} data
        </p>
        <div className="pre_next_page">
          <GrFormPrevious className="pre" onClick={handlePrevPage} disabled={currentPage === 1} />
          <p>{currentPage}</p>
          <GrFormNext className="next" onClick={handleNextPage} disabled={currentPage === totalPages} />
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDashboard
