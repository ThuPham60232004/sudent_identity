import React from 'react'
import './OverviewDetailCollection.css'
import { FaChevronDown } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
const OverviewDetailCollection = () => {
  return (
    <div className='OverviewDetailCollectionContainer'>
      <img
        src='/img/nft-image-1.png'
        alt='collectionimage1'
        className='collection-image-1'
      />
      <div className='OverviewDetailCollectionRight'>
        <div className='OverviewDetailCollectionHeader'>
          <h5>Items minted</h5>
          <h6>11.001</h6>
        </div>  
        <div className='OverviewDetailCollectionBody'>
          <h3>Mint sold out</h3>
          <h5>All items were minted</h5>
          <div className='OverviewDetailCollectionBodybutton'>
            View collection
          </div>
        </div>
        <div className='OverviewDetailCollectionFotter'>
          <SiTicktick />
          <div className='OverviewDetailCollectionFotteritem1'>
            <h4>Public Stage</h4>
            <h6>July 12, 2024 at 4:00AM GMT+7</h6>
          </div>
          <div className='OverviewDetailCollectionFotteritem2'>
            <h6>Ended</h6>
            <FaChevronDown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewDetailCollection