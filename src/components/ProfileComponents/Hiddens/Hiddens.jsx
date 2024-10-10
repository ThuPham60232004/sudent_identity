import React from 'react';
import './Hiddens.css';

const Hiddens = () => {
  return (
    <div className="hidden-hidden-container">
      <div className="hidden-hidden-sidebar">
        <div className="hidden-filter-section">
          <h3>Hidden Status</h3>
          <div>
            <input type="checkbox" id="hidden-hidden-by-you" />
            <label htmlFor="hidden-hidden-by-you">Hidden by you</label>
          </div>
          <div>
            <input type="checkbox" id="hidden-auto-hidden" />
            <label htmlFor="hidden-auto-hidden">Auto-hidden</label>
          </div>
        </div>

        <div className="hidden-collection-section">
          <h3>Collections</h3>
          <input type="text" placeholder="Search" className="hidden-search-input" />
          <div className="hidden-collection-list">
            <div className="hidden-collection-item">
              <img src="collection-img.png" alt="collection" />
              <span>Shooting Zombie</span>
              <span>Floor: --</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden-hidden-main">
        <div className="hidden-item-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlFWX0vF0sJtV7Tu-ytemwAv2IuJ8DLjbjA&s" alt="AK1" />
          <div className="hidden-item-info">
            <h4>AK1</h4>
            <p>Shooting Zombie</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiddens;
