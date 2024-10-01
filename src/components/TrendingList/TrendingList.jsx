import React, { useState } from "react";
import "./TrendingList.css"; // Import your CSS

// Sample data structure
const trendingData = [
  {
    rank: 1,
    name: "Courtyard.io",
    floorPrice: "0.004 ETH",
    volume: "15.1 ETH",
    item : "8",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTim5udFUI8FlOcUmmDPsXmEK0AhMxWTu_EHA&s",
  },
  {
    rank: 2,
    name: "KIP Protocol Genesis Pass",
    floorPrice: "0.05 ETH",
    volume: "4.5 ETH",
     item : "8",
    imageUrl: "https://img.lovepik.com/original_origin_pic/18/07/25/8971387aa7efb981140343063196441d.png_wh860.png", 
  },
  {
    rank: 3,
    name: "Pepels",
    floorPrice: "0.09 ETH",
    volume: "4.3 ETH",
     item : "9",
    imageUrl: "https://img.lovepik.com/png/20231012/Cartoon-cute-character-japanese-student-japanese-characters-ancient-costumes-creative_183321_wh860.png", 
  },
  {
    rank: 4,
    name: "egg",
    floorPrice: "0.14 ETH",
    volume: "6 ETH",
     item : "1",
    imageUrl: "https://png.pngtree.com/png-clipart/20190618/original/pngtree-cute-q-version-cartoon-character-image-q-version-cartoon-character-cute-png-image_3946095.jpg", 
  },
  {
    rank: 5,
    name: "DeGods",
    floorPrice: "2.24 ETH",
    volume: "73.8 ETH",
     item : "10",
    imageUrl: "https://img.lovepik.com/png/20231105/Cute-cartoon-characters-cute-avatar-expressions-avatar-set_497508_wh860.png", 
  },
    {
    rank: 6,
    name: "DeGods",
    floorPrice: "2.24 ETH",
    volume: "73.8 ETH",
     item : "10",
    imageUrl: "https://img.lovepik.com/png/20231105/Cute-cartoon-characters-cute-avatar-expressions-avatar-set_497508_wh860.png", 
  },
   {
    rank: 7,
    name: "Courtyard.io",
    floorPrice: "0.004 ETH",
    volume: "15.1 ETH",
    item : "8",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTim5udFUI8FlOcUmmDPsXmEK0AhMxWTu_EHA&s",
  },
  {
    rank: 8,
    name: "KIP Protocol Genesis Pass",
    floorPrice: "0.05 ETH",
    volume: "4.5 ETH",
     item : "8",
    imageUrl: "https://img.lovepik.com/original_origin_pic/18/07/25/8971387aa7efb981140343063196441d.png_wh860.png", 
  },
  {
    rank: 9,
    name: "Pepels",
    floorPrice: "0.09 ETH",
    volume: "4.3 ETH",
     item : "9",
    imageUrl: "https://img.lovepik.com/png/20231012/Cartoon-cute-character-japanese-student-japanese-characters-ancient-costumes-creative_183321_wh860.png", 
  },
  {
    rank: 10,
    name: "egg",
    floorPrice: "0.14 ETH",
    volume: "6 ETH",
     item : "1",
    imageUrl: "https://png.pngtree.com/png-clipart/20190618/original/pngtree-cute-q-version-cartoon-character-image-q-version-cartoon-character-cute-png-image_3946095.jpg", 
  },
  {
    rank: 11,
    name: "DeGods",
    floorPrice: "2.24 ETH",
    volume: "73.8 ETH",
     item : "10",
    imageUrl: "https://img.lovepik.com/png/20231105/Cute-cartoon-characters-cute-avatar-expressions-avatar-set_497508_wh860.png", 
  },
    {
    rank: 12,
    name: "DeGods",
    floorPrice: "2.24 ETH",
    volume: "73.8 ETH",
     item : "10",
    imageUrl: "https://img.lovepik.com/png/20231105/Cute-cartoon-characters-cute-avatar-expressions-avatar-set_497508_wh860.png", 
  },
];

const TrendingList = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
  const [selectedTab, setSelectedTab] = useState("Trending");

  const handleTimeframeClick = (timeframe) => {
    setSelectedTimeframe(timeframe);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="trendinglist_container">
      <div className="trendinglist_content">
        <div className="trendinglist_content_left">
          <h2>TOP COLLECTIONS TODAY</h2>
          <p>Smart NFT is the web3 NFT Marketplace where traders and collectors have earned over <span>$1.3 Billion in rewards.</span></p>
        </div>
        <div className="trendinglist_content_right">
          <button><a href="#">VIEW ALL COLLECTION</a></button>
        </div>
      </div>
      <div className="trendinglist_body">
  {trendingData.map((item, index) => (
        <div key={index} className="trendinglist-col">
          <div className="trendinglist_col_left">
            <p>{item.rank}</p>
            <img src={item.imageUrl} alt="" />
            <div className="trendinglist_name_price">
              <h4>{item.name}</h4>
              <p><span>Floor price</span> {item.floorPrice}</p>
            </div>
          </div>
          <div className="trendinglist_col_right">
            <p>{item.volume}</p>
            <p><span>Item</span> {item.item}</p>
          </div>
        </div>
              ))}
      </div>
    </div>
    
  );
};

export default TrendingList;





    // <div className="trending-container">
    //   <div className="topTreding">
    //     <div className="tabs">
    //       <button
    //         className={selectedTab === "Trending" ? "active-tab" : ""}
    //         onClick={() => handleTabClick("Trending")}>
    //         Trending
    //       </button>
    //       <button
    //         className={selectedTab === "Top" ? "active-tab" : ""}
    //         onClick={() => handleTabClick("Top")}>
    //         Top
    //       </button>
    //     </div>

    //     <div className="timeframes">
    //       {["1h", "6h", "24h", "7d"].map((time) => (
    //         <button
    //           key={time}
    //           className={selectedTimeframe === time ? "active-timeframe" : ""}
    //           onClick={() => handleTimeframeClick(time)}
    //         >
    //           {time}
    //         </button>
    //       ))}
    //     </div>
    //   </div>

    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Rank</th>
    //         <th>Collection</th>
    //         <th>Floor Price</th>
    //         <th>Volume</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {trendingData.map((item, index) => (
    //         <tr key={index}>
    //           <td>{item.rank}</td>
    //           <td>
    //             <img src={item.imageUrl} alt={item.name} className="collection-image" />
    //             {item.name}
    //           </td>
    //           <td>{item.floorPrice}</td>
    //           <td>{item.volume}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>