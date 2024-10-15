import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BuyModal.css';

const BuyModal = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("20:06"); 

  if (!isOpen) return null;

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content_buymodal">
        <div className="modal-header_buymodal">
          <h2>Make an offer</h2>
          <button onClick={onClose} className="close-btn_buymodal">✕</button>
        </div>
        <div className="modal-body_buymodal">
          <div className="nft-info_buymodal">
            <img src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=465&dpr=1&s=none" alt="NFT" className="nft-modal-image_buymodal" />
            <div className='nft-name_buymodal'>
              <h3>LEONARD</h3>
              <p>Shooting Zombie</p>
            </div>
          </div>

          <div className="modal-balance_buymodal">
            <div className="balance-row_buymodal">
              <p>Balance</p>
              <h2>0 ETH</h2>
            </div>
            <div className="balance-row_buymodal">
              <p>Floor price</p>
              <h2>--</h2>
            </div>
            <div className="balance-row_buymodal">
              <p>Best offer</p>
              <h2>--</h2>
            </div>
          </div>

          <div className="modal-inputs_buymodal">
           <div className="price_quantity_buymodal">
            <div className="input-container_buymodal">
               <label htmlFor="price">Price</label>
              <input type="text" id="price" placeholder="ETH" />
            </div>
            <div className="input-container_buymodal">
              <label htmlFor="quantity">Quantity</label>
              <input type="number" id="quantity" min="1" defaultValue="1" />
            </div>
           </div>
            

          <div className="input-duration-container_buymodal">
               <label htmlFor="duration">Duration</label>
            <div className="duration-container_buymodal">
              <div className="date-picker-input_buymodal">
                 <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MMM d, yyyy"
                className="icon-date-picker-input_buymodal"
              />
              </div>
             
              <input
                type="time"
                value={selectedTime}
                onChange={handleTimeChange}
                className="time-picker-input_buymodal"
              />
            </div>
            </div>
           
          </div>

          <button className="make-offer-btn_buymodal">Make offer</button>
        </div>
      </div>
    </div>
  );
};

export default BuyModal;
