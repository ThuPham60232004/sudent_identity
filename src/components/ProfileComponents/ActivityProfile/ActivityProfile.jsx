import React from 'react';
import './ActivityProfile.css'; 

const activities = [
  { event: 'Mint', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Y6LJX7s5AIQ76VRiU5JtsfS-KIK8aFjMWw&s', item: 'LEONARD', type: 'Shooting Zombie', price: '---', rarity: '--', quantity: 100, from: 'NullAddress', to: 'you', time: '6mo ago' },
  { event: 'Mint', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQfxjFtOhgggT9GczfuDT2Km2WiFno8W15cA&s', item: 'LARD', type: 'Shooting Zombie', price: '---', rarity: '--', quantity: 5, from: 'NullAddress', to: 'you', time: '6mo ago' },
  { event: 'Mint', img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/359415081/original/4b3b84a812d283596d70a4bb6d47a3688aeb2329/make-nft-logo-and-nft-generator.jpg', item: 'LAD', type: 'Shooting Zombie', price: '---', rarity: '--', quantity: 2, from: 'NullAddress', to: 'you', time: '6mo ago' },
  { event: 'Mint', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jKmQW_-p9sCusRMXexhhdk7JZkGzTKMcKg&s', item: 'EONA', type: 'Shooting Zombie', price: '---', rarity: '--', quantity: 1, from: 'NullAddress', to: 'you', time: '6mo ago' },
];

const ActivityProfile = () => {
  return (
    <div className="activity-container">
      <div className="filter-sidebar">
        <div className="filter-title">Event Type</div>
        <div className="filter_group">
          <button className="filter-button active">All</button>
          <button className="filter-button">Sales</button>
          <button className="filter-button">Deals accepted</button>
          <button className="filter-button">Listings</button>
          <button className="filter-button">Offers</button>
          <button className="filter-button">Collection offers</button>
          <button className="filter-button">Deal offers</button>
          <button className="filter-button">Transfers</button>
        </div>
        
      </div>
      <div className="activity-table">
        <div className="table-header">
          <div className="header-item_1">Item</div>
          <div className="header-item_2">Price</div>
          <div className="header-item_3">Rarity</div>
          <div className="header-item_4">Quantity</div>
          <div className="header-item_5">From</div>
          <div className="header-item_6">To</div>
          <div className="header-item_7">Time</div>
        </div>
        {activities.map((activity, index) => (
          <div className="table-row" key={index}>
            <div className="table-item_1">
              <span className="item-event">{activity.event}</span>
              <div className="item-details">
                <img src={activity.img} alt={activity.item} className="item-image" />
                <div>
                  <div className="item-name">{activity.item}</div>
                  <div className="item-type">{activity.type}</div>
                </div>
              </div>
            </div>
            <div className="table-item_2">{activity.price}</div>
            <div className="table-item_3">{activity.rarity}</div>
            <div className="table-item_4">{activity.quantity}</div>
            <div className="table-item_5">{activity.from}</div>
            <div className="table-item_6">{activity.to}</div>
            <div className="table-item_7">{activity.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityProfile;
