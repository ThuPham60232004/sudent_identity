import React from 'react';
import './OfferMade.css';

const OfferMade = () => {
  return (
    <div className="offer-made-container">
      <div className="filters">
        <button className="filter-button">Type</button>
        <button className="filter-button">Status</button>
      </div>

      <div className="collections-section">
        <div className="collections-header">
          <h3>Collections</h3>
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
        <div className="collections-content">
          <p>No items to display</p>
        </div>
      </div>
    </div>
  );
};

export default OfferMade;
