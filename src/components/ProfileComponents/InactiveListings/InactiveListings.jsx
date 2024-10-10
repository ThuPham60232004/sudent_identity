import React from 'react';
import './InactiveListings.css';
import { FaSlidersH } from 'react-icons/fa';

const InactiveListings = () => {
  return (
    <div className="listings-container">
      <div className="listings-header">
        <h2 className="listings-title">Collections</h2>
        <div className="listings-actions">
          <FaSlidersH className="filter-icon" />
          <span className="listings-status">Active listings</span>
          <span className="listings-cancel">Cancel all listings and offers</span>
          <span className="info-icon">ℹ️</span>
        </div>
      </div>
      <div className="listings-body">
        <div className="empty-listings">
          <img src="https://opensea.io/static/images/empty-bids.svg" alt="No listings yet" />
          <span>No listings yet</span>
        </div>
      </div>
    </div>
  );
};

export default InactiveListings;
