import React from 'react';
import './OffersReceived.css';
import { FaSlidersH, FaCog } from 'react-icons/fa';

const OffersReceived = () => {
  return (
    <div className="offers-container">
      <div className="offers-header">
        <div className="offers-filter">
          <FaSlidersH className="filter-icon" />
        </div>
        <h2 className="offers-title">Collections</h2>
        <div className="offers-actions">
          <span>Show all offers</span>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
          <FaCog className="settings-icon" />
        </div>
      </div>
      <div className="offers-body">
        <div className="offers-section-header">
          <span className="offers-section-title">Offers received</span>
          <span className="info-icon">ℹ️</span>
        </div>
        <div className="offers-empty">
          <div className="empty-image">
            <img src="https://opensea.io/static/images/empty-bids.svg" alt="No offers" />
          </div>
          <span>No offers yet</span>
        </div>
      </div>
    </div>
  );
};

export default OffersReceived;
