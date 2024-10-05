// import React from 'react';
// import './HeaderDetailCollection.css';
// import { SiTicktick } from "react-icons/si";

// const HeaderDetailCollection = ({ item }) => {
//   if (!item) {
//     return <div>Loading...</div>; 
//   }

//   return (
//     <div className='HeaderDetailCollectionContainer' style={{ backgroundImage: `url('/img/112.png')` }}>
//       <div className='CollectionDetails'>
//         <div className='CollectionDetailsText'>
//           <img src={item.imageUrl} alt={item.name} className='CollectionDetailsImg'/>
//           <div className='CollectionDetailsIcon'>
//             <h1>{item.name}</h1> 
//             <img  
//               src='/img/tickBlue.png'
//               alt='tickBlue'
//               className='tickBlueHeaderDetail'
//             />
//           </div>
//           <div className='textheader1'>
//             <h1><span>{item.name} is a historic NFT collection...</span>See more</h1>
//             <span>Floor Price: {item.floorPrice}</span><br/>
//             <span>Volume: {item.volume}</span><br/>
//             <span>Items: {item.item}</span><br/>
//           </div>
//         </div>
     
//         <div className='Stats'>
//           <div className='StatItem'>
//             <p>1.552 ETH</p>
//             <h5>Total Volume</h5>  
//           </div>
//           <div className='StatItem'>
//             <p>0.009 ETH</p>
//             <h5>Floor Price</h5>
//           </div>
//           <div className='StatItem'>
//              <p>0.008 WETH</p>
//             <h5>Best Offer</h5>
//           </div>
//           <div className='StatItem'>
//             <p>55%</p>
//             <h5>Listed</h5>
//           </div>
//           <div className='StatItem'>
//             <p>5,388 (23%)</p>
//             <h5>Owners (Unique)</h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeaderDetailCollection;



import React from 'react';
import './HeaderDetailCollection.css';

const HeaderDetailCollection = ({ item }) => {
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className='HeaderDetailCollectionContainer' style={{ backgroundImage: `url('/img/112.png')` }}>
      <div className='CollectionDetails'>
        <div className='CollectionDetailsText'>
          <img src={item.imageUrl} alt={item.name} className='CollectionDetailsImg'/>
          <div className='CollectionDetailsIcon'>
            <h1>{item.name}</h1> 
            <img  
              src='/img/tickBlue.png'
              alt='tickBlue'
              className='tickBlueHeaderDetail'
            />
          </div>
          <div className='textheader1'>
            <h1><span>{item.name} is a historic NFT collection...</span>See more</h1>
            <span>Floor Price: {item.floorPrice}</span><br/>
            <span>Volume: {item.volume}</span><br/>
            <span>Items: {item.item}</span><br/>
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
