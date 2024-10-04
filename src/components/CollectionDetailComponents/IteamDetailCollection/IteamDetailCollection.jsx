import React from 'react'
import './IteamDetailCollection.css'
import { FaAngleLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
const IteamDetailCollection = () => {
  const type=[{
    nametype: "Art"
  },{
    nametype: "Gaming"
  },
  {
    nametype:"Music"
  }
  ,{
    nametype:"Fashion"
  }
];
  return (
    <div className='IteamDetailCollectionContainer'>
      <div className='FilterItem'>
        <div className='FilterItemRight'>
           <FaAngleLeft />
           <h4>Filter</h4>
        </div>
        <div className='FilterItemLeft'>
         <div className='FilterItemLeftType'>
         {type.map((typeCollection)=>(
            <div className='FilterItemType'>
              <h3>{typeCollection.nametype}</h3>
            </div>
          ))}
         </div>
          <hr/>
        </div>
      </div>


    <div className='IteamDetailCollectionBody'>
      <div className='IteamDetailCollectionLeft'>
        <h1>Price</h1>
        <hr/>
        <div className='IteamDetailCollectionMaxMin'>
            <div className='IteamDetailCollectionMin'>
              <p>Min</p>
            </div>
            <div className='IteamDetailCollectionMax'>
              <p>Max</p>
            </div>
           
        </div>
        <div  className='IteamDetailCollectionButton'>
          <h4>APPLY</h4>
        </div>
        <br/>
        <h1>Item Type</h1>
        <hr/>
        <div className='IteamDetailCollectionGrouphh4'>
          <div className='IteamDetailCollectionGrouph'><h4>All</h4></div>
          <div className='IteamDetailCollectionGrouph'><h4>Auction</h4></div>
          <div className='IteamDetailCollectionGrouph'><h4>Buy Now</h4></div>
        </div>
        <br/>
        <h1>Sort</h1>
        <hr/>
        <div className='IteamDetailCollectionGrouph4'>
          <div className='IteamDetailCollectionGroup'>
            <h4>Name ASC</h4>
            <h4>Name DESC</h4>
          </div>
          <div className='IteamDetailCollectionGroup'>
            <h4>Price ASC</h4>
            <h4>Price DESC</h4>
          </div>
          <div className='IteamDetailCollectionGroup'>
            <h4>Lastest</h4>
            <h4>Oldest</h4>
          </div>
        </div>
        <br/>
      </div>
      <div className='IteamDetailCollectionRight'>
          <div className='IteamDetailCollectionRightContainer'>
            <img 
                src='https://ichef.bbci.co.uk/news/480/cpsprodpb/DBB7/production/_122074265_hi071843849.jpg.webp'
                alt='detailimg'
                className='detailimg'
            />
            <div className='IteamDetailCollectionRightSmallContainer'>
              <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5spyvVxk6Hqtp0Pcwh-pgk5LbvafnxwEfw&s'
                  alt='detailimgsmall'
                  className='detailimgsmall'
              />
              <h3>Creator</h3>
              <h4>Eaton Jones</h4>
              <img  
                src='/img/tickBlue.png'
                alt='tickBlue'
                className='tickBlueDetail'
              />
            </div>
            <hr/>
            <div className=''>
              <div className=''>
                <h4>NFTLab#4</h4>
                <small>Ends in 1year, 8 months</small>
              </div>
              <div className=''>
                <FaRegHeart className='RegHeart'/>
                <div className=''></div>
              </div>
            </div>
            <h5>Price</h5>
            <p>0.52 ETH</p>
          </div>
      </div>
    </div>

    </div>
  )
}

export default IteamDetailCollection