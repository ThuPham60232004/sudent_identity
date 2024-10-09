import React, { useState, useEffect, useContext } from "react";
import { FaTh, FaBars, FaFilter } from "react-icons/fa";
import { ItemContext } from "../../../context/ItemContext"; 
import { useNavigate } from 'react-router-dom';
import "./NFTs.css";

const NFTs = () => {
  const navigate = useNavigate();
  const { setItem } = useContext(ItemContext); 

  const [sortOrder, setSortOrder] = useState('floorPriceAsc');
  const [filterCollection, setFilterCollection] = useState('All');
  const [items, setItems] = useState([
    {
      rank: 10,
      name: "egg",
      floorPrice: "0.14 ETH",
      volume: "6 ETH",
      item: "1",
      imageUrl: "https://png.pngtree.com/png-clipart/20190618/original/pngtree-cute-q-version-cartoon-character-image-q-version-cartoon-character-cute-png-image_3946095.jpg", 
    },
    {
      rank: 11,
      name: "DeGods",
      floorPrice: "2.24 ETH",
      volume: "73.8 ETH",
      item: "10",
      imageUrl: "https://img.lovepik.com/png/20231105/Cute-cartoon-characters-cute-avatar-expressions-avatar-set_497508_wh860.png", 
    },
  ]);
  
  const [filteredItems, setFilteredItems] = useState(items);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      const filtered = items.filter(item => 
        filterCollection === 'All' || item.collection === filterCollection
      );
      setFilteredItems(filtered);
      sortItems(sortOrder, filtered);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [items, sortOrder, filterCollection]);

  const sortItems = (criteria, itemsToSort) => {
    let sortedItems = [...itemsToSort];
    if (criteria === 'titleAsc') {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === 'titleDesc') {
      sortedItems.sort((a, b) => b.name.localeCompare(a.name));
    } else if (criteria === 'priceAsc') {
      sortedItems.sort((a, b) => parseFloat(a.floorPrice) - parseFloat(b.floorPrice));
    } else if (criteria === 'priceDesc') {
      sortedItems.sort((a, b) => parseFloat(b.floorPrice) - parseFloat(a.floorPrice));
    }
    setFilteredItems(sortedItems);
  };

  const handleClick = (item) => {
    setItem(item);
    navigate("/CollectionDetailPage", { state: { item } });
  };

  return (
    <div className="nfts-container">
      <div className="nfts-header">
        <p>{filteredItems.length} items</p>
        <div className="nfts-controls">
          <select onChange={(e) => setFilterCollection(e.target.value)}>
            <option value="All">All Collections</option>
            <option value="Chromory">Chromory</option>
          </select>
          <select onChange={(e) => {
            setSortOrder(e.target.value);
            sortItems(e.target.value, filteredItems);
          }}>
            <option value="titleAsc">Title: A-Z</option>
            <option value="titleDesc">Title: Z-A</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
          <div className="nfts-icons">
            <FaTh className="icon" />
            <FaBars className="icon" />
            <FaFilter className="icon" />
          </div>
        </div>
      </div>
      <div className="nfts-gallery">
        {loading ? (
          <div className="loading-spinner">Loading...</div>
        ) : (
          filteredItems.map((item, index) => (
            <div className="nfts-gallery-item" key={index} onClick={() => handleClick(item)}>
              <div className="nfts-gallery-item-image">
                <img src={item.imageUrl} alt={item.name} />
              </div>
              <div className="nfts-gallery-item-info">
                <div className="nfts-gallery-item-rank">  <h4>Rank:</h4> {item.rank}</div>
                <div className="nfts-gallery-item-floorPrice">  <h4>FloorPrice:</h4>{item.floorPrice}</div>
                <div className="nfts-gallery-item-volume">  <h4>Volume:</h4>{item.volume}</div>
                <div className="nfts-gallery-item-owners"> <h4>Item:</h4>{item.item}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NFTs;
