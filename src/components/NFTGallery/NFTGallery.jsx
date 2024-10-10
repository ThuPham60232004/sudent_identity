import React, { useContext } from 'react';
import { ItemContext } from "../../context/ItemContext";
import { useNavigate } from 'react-router-dom';
import './NFTGallery.scss';

const NFTGallery = () => {
  const { setItem } = useContext(ItemContext);
  const navigate = useNavigate();

  const nftData = [
    {
      id: 1,
      name: "Clone #17373",
      imageUrl: "https://media.vneconomy.vn/w900/images/upload/2022/06/16/untitled.png",
      likes: 22,
      timeRemaining: "3h:15m:20s",
      price: "1.000 ETH",
      stock: "61 in stock"
    },
    {
      id: 2,
      name: "Art Piece #4521",
      imageUrl: "https://png.pngtree.com/png-clipart/20221222/ourmid/pngtree-panda-anthropomorphic-singer-professional-nft-digital-artistic-head-portrait-ip-png-image_6501809.png",
      likes: 30,
      timeRemaining: "1h:25m:10s",
      price: "0.800 ETH",
      stock: "10 in stock"
    },
    {
      id: 3,
      name: "Rare Crypto Art #007",
      imageUrl: "https://vcdn-sohoa.vnecdn.net/2021/10/03/NFT-Imran-Ahmed-3484-1633229247.png",
      likes: 15,
      timeRemaining: "2h:45m:05s",
      price: "2.500 ETH",
      stock: "5 in stock"
    },
    {
      id: 4,
      name: "Exclusive NFT #9901",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKc9gc2tbLCGlkeZ0L9ZSGfGoWS0Dj9EpjxQ&s",
      likes: 40,
      timeRemaining: "0h:50m:30s",
      price: "3.200 ETH",
      stock: "2 in stock"
    },
    {
      id: 5,
      name: "Digital Artifact #1123",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDOfg5XsjwhzOV2fzaxQr-Zi_eFEMPSeuWmE9Wd2GOWO_Ky4nIaXUu5Yt1-3NIwvFDww&usqp=CAU",
      likes: 50,
      timeRemaining: "4h:20m:15s",
      price: "0.500 ETH",
      stock: "100 in stock"
    },
    {
      id: 6,
      name: "Crypto Collectible #908",
      imageUrl: "https://cdn.vnreview.vn/917504_70849780688565_532777808166912?wt=661a94749f5a50cf1a4c322516178844&rt=f28db8119d62c11faae1ddabe25de5bb&width=1080",
      likes: 18,
      timeRemaining: "5h:30m:40s",
      price: "1.800 ETH",
      stock: "15 in stock"
    }
  ];

  const handleClick = (item) => {
    setItem(item);
    navigate("/CollectionDetailPage", { state: { item } });
  };

  return (
    <div className="nft-gallery">
      <div className="nft-gallery-header">
        <p className="title_sub">TRENDING NOW</p>
        <nav className="nft-gallery-nav">
          <ul className="nft-gallery-categories">
            <li className="nft-gallery-category">NFTs</li>
            <li className="nft-gallery-category">Arts</li>
            <li className="nft-gallery-category">Musics</li>
            <li className="nft-gallery-category">Sports</li>
            <li className="nft-gallery-category">Photography</li>
          </ul>
        </nav>
      </div>

      <div className="subscription-container">
        {nftData.map((item, index) => (
          <div key={index} className="subscription_con" onClick={() => handleClick(item)}>
            <div className="plans-grid">
              <img src={item.imageUrl} alt={item.name} className="bg_plan" />
              <div className="detail_plan_card">
                <p>{item.name}</p>
                <div className="detail_plan_grid">
                  <div className="detail_plan_content">
                    <h4>Price</h4>
                    <p>{item.price}</p>
                  </div>
                  <div className="detail_plan_content">
                    <h4>Stock</h4>
                    <p>{item.stock}</p>
                  </div>
                  <div className="detail_plan_content">
                    <h4>Time Remaining</h4>
                    <p>{item.timeRemaining}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTGallery;
