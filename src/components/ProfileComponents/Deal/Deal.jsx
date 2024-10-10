import React, { useState } from 'react';
import './Deal.css';

const Deal= () => {
  const [activeTab, setActiveTab] = useState('Active');

  const tabs = ['All', 'Active', 'Accepted', 'Canceled', 'Inactive', 'Expired'];

  return (
    <div className="deals-container">
      <div className="deals-sidebar">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`deal-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="deals-main">
        <div className="deals-header">
          <h2>{activeTab} deals</h2>
          <div className="deals-filters">
            <select>
              <option>All deals</option>
            </select>
            <select>
              <option>Most recent</option>
            </select>
            <button className="deal-button">Make a deal</button>
          </div>
        </div>
        <div className="deals-content">
          <p>No deals to display</p>
        </div>
      </div>
    </div>
  );
};

export default Deal;
