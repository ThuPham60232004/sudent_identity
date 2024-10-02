import React from 'react';
import './HeaderDetailCollection.css';
import { SiTicktick } from "react-icons/si";
const HeaderDetailCollection = () => {
  return (
    <div className='HeaderDetailCollectionContainer' style={{ backgroundImage: `url('/img/112.png')` }}>
      <div className='CollectionDetails'>
        <div className='CollectionDetailsText'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjye7TbDEjJXF6dK9VlxNk3KtKVEcYU2v9OQ&s' alt='CollectionDetailsImg' className='CollectionDetailsImg'/>
        <div className='CollectionDetailsIcon'>
            <h1>Rare Pepe</h1> 
            <img  
              src='/img/tickBlue.png'
              alt='tickBlue'
              className='tickBlueHeaderDetail'
            />
          </div>
          <div className='CollectionDetailsIcon'>
            <h6>Emblem Vault</h6>
            <img  
              src='/img/tickBlue.png'
              alt='tickBlue'
              className='tickBlueHeaderDetail1'
            />
          </div>
          <div className='textheader1'>
            <h1><span>Rare Pepes is a historic NFT collection of 1,774 unique cards with...</span>See more</h1>
              <span>Unique items 1.658 · Total items 23,1K · Created Jan 2023  · </span>
            <br/>
              <span>Creator earnings 5% · Chain Ethereum</span>
            </div>
        </div>
     
        <div className='Stats'>
          <div className='StatItem'>
            <p>1.552 ETH</p>
            <h5>Total Volume</h5>  
          </div>
          <div className='StatItem'>
            <p>0.009 ETH</p>
            <h5>Floor Price</h5>
          </div>
          <div className='StatItem'>
             <p>0.008 WETH</p>
            <h5>Best Offer</h5>
          </div>
          <div className='StatItem'>
            <p>55%</p>
            <h5>Listed</h5>
          </div>
          <div className='StatItem'>
            <p>5,388 (23%)</p>
            <h5>Owners (Unique)</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderDetailCollection;
