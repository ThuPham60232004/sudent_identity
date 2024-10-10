import React from 'react';
import './Favorited.css'; 

const Favorited = () => {
  return (
    <div className="favorited-container">
      <div className="empty-state">
        <img src="https://opensea.io/static/images/no-similar-items.svg" alt="No items" className="empty-icon" />
        <p>No items to display</p>
      </div>
    </div>
  );
};

export default Favorited;
