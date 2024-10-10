import React from 'react';
import './Collected.css';

const items = [
  { id: 1, name: 'LEONARD', description: 'Shooting Zombie', quantity: 'x100', image: 'https://i.seadn.io/s/raw/files/9ce72afdc86e5bd347faf0cd35c75bb8.png?auto=format&dpr=1&w=750' },
  { id: 2, name: 'ADAM', description: 'Shooting Zombie', quantity: 'x5', image: 'https://i.seadn.io/s/raw/files/485e1f1c46d62eb9027f24d7910ac9ab.png?auto=format&dpr=1&w=750' },
  { id: 3, name: 'AN', description: 'Shooting Zombie', quantity: 'x2', image: 'https://i.seadn.io/s/raw/files/8ebe52a0b736dbf95611b7a4a6b93229.png?auto=format&dpr=1&w=750' },
  { id: 4, name: 'AK', description: 'Shooting Zombie', quantity: 'x1', image: 'https://i.seadn.io/s/raw/files/575793ccc5d7ea73d606f2ad6b827dc1.png?auto=format&dpr=1&w=750' }
];

const Collected = () => {
  return (
    <div className="collected-container">
      <div className="filter-sidebar">
        <h3>Collections</h3>
        <input type="text" placeholder="Search" className='filter-sidebar-search'/>
        <h3>Price</h3>
        <h3>Currency</h3>
      </div>

      <div className="collected-items">
        <div className="items-header">4 items</div>
        <div className="items-grid">
          {items.map((item) => (
            <div className="item-card" key={item.id}>
              <div className="item-quantity">{item.quantity}</div>
              <img src={item.image} alt={item.name} className="item-image-collected" />
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collected;
