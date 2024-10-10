import React from 'react';
import './ActiveListings.css';
import { FaSlidersH } from 'react-icons/fa';

const ActiveListings = () => {
  return (
    <div className="activeListings-container">
      <div className="activeListings-header">
        <h2 className="activeListings-title">Collections</h2>
        <div className="activeListings-actions">
          <FaSlidersH className="filter-icon" />
          <span className="activeListings-status">Active listings</span>
          <span className="activeListings-cancel">Cancel all listings and offers</span>
          <span className="info-icon">ℹ️</span>
        </div>
      </div>
      <div className="activeListings-body">
        <div className="empty-listings">
          <img src="https://opensea.io/static/images/empty-bids.svg" alt="No listings yet" />
          <span>No listings yet</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveListings;
