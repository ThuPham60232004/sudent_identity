import React from 'react';
import './SellModal.css';

const SellModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="sell-modal-overlay">
      <div className="sell-modal-content">
        <div className="sell-modal-header">
          <h2>Quick List</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="sell-modal-details">
          <div className="modal-item">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkP290uEH2BjU5Hrlqu2hOmj1mzege9IVzuw&s" 
              alt="NFT" 
              className="modal-item-image" 
            />
            <div className="modal-item-info">
              <p className="modal-item-name">LEONARD</p>
              <p className="modal-item-description">Shooting Zombie</p>
            </div>
          </div>
        <div className="modal-section_group">
          <div className="modal-section1">
            <label># of items</label>
            <input type="number" value="1" min="1" max="100" className="modal-input"/>
            <p className="items-available">100 available</p>
          </div>

          <div className="modal-section2">
            <label>Set a price per item</label>
            <div className="modal-price-input">
              <input type="number" placeholder="Starting price" className="modal-input" />
              <select className="modal-select">
                <option value="ETH">ETH</option>
              </select>
            </div>
          </div>
        </div>
          

          <div className="modal-section">
            <label>Duration</label>
            <div className="modal-duration-input">
              <select className="modal-select">
                <option value="1 month">1 month</option>
                <option value="3 months">3 months</option>
                <option value="7 months">7 months</option>
              </select>
              <input type="datetime-local" className="modal-input" />
            </div>
          </div>

          <div className="modal-summary">
            <div className="modal-summary_buymodal_box">
               <p>Total price:</p>
               <h2>-- ETH</h2>
            </div>
            <div className="modal-summary_buymodal_box">
               <p>OpenSea fee:</p>
               <h2>2.5%</h2>
            </div>
            <div className="modal-summary_buymodal_box">
               <p>Creator earnings:</p>
               <h2>0%</h2>
            </div>
             <div className="modal-summary_buymodal_box">
               <p>Total potential earnings:</p>
               <h2>-- ETH</h2>
            </div>
          </div>

          <div className="modal-actions">
            <button onClick={onClose} className="modal-cancel-btn">Cancel</button>
            <button className="modal-complete-btn">Complete Listing</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellModal;
