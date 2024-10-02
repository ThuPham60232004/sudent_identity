import React,{useState} from 'react'
import './OverviewDetailCollection.css'
import { FaChevronDown } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
const OverviewDetailCollection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  const faqItems = [
    "What is Parallel?",
    "What are Avatars?",
    "What are Avatars used for?",
    "How can I obtain an Avatar?",
    "What is the cost?",
    "What is the mint limit?",
    "What is the supply?",
    "What are the pre-minted Avatars being used for?",
    "How is the supply of Avatars being distributed?",
    "When is the reveal?"
  ];
  return (
    <div className='OverviewDetailCollection'>
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
        <div className='OverviewDetailCollectionItem'></div>
        <div className='OverviewDetailCollectionBody'>
          <h3>Mint sold out</h3>
          <h5>All items were minted</h5>
          <div className='OverviewDetailCollectionBodybutton'>
            <h4>View collection</h4>
          </div>
        </div>
        <h3>Mint schedule</h3>
        <div className='OverviewDetailCollectionFotter'>
          <SiTicktick />
          <div className='OverviewDetailCollectionFotterContainer'>
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
        </div>
        <div className='OverviewDetailCollectionContent1Container'>
            <div className='OverviewDetailCollectionContent1Left'>
              <h1>Pararell Avatars: Behind The Scnes</h1>
              <h2>
              NFTs, or Non-Fungible Tokens, are unique digital assets that are stored and verified on a blockchain. Unlike cryptocurrencies such as Bitcoin, which are interchangeable, NFTs are non-fungible, meaning each one is unique and cannot be exchanged on a one-to-one basis. They represent ownership of a specific item, which could range from digital art and music to videos or virtual real estate.
              </h2>
            </div>
            <div className='OverviewDetailCollectionContent1Right'>
              <img
                  src='/img/nft-image-2.png'
                  alt='collectionimage1'
                  className='collection-image-1'
                />
            </div>
        </div>

        <div className='OverviewDetailCollectionContent2Container'>
            <div className='OverviewDetailCollectionContent2Left'>
            <h1>Kathari</h1>
              <h2>
              Using blockchain technology, NFTs ensure that the authenticity and ownership of digital assets are transparent and verifiable. Many artists and creators have embraced NFTs as a new way to monetize their work, offering collectors exclusive ownership of rare digital items. The Ethereum blockchain is currently one of the most popular platforms for minting and trading NFTs, making it a hub for NFT marketplaces.
              </h2>
            </div>
            <div className='OverviewDetailCollectionContent2Right'>
              <img
                  src='/img/nft-image-3.png'
                  alt='collectionimage1'
                  className='collection-image-1'
                />
            </div>
        </div>
        <div className="faq-accordion">
          {faqItems.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleAccordion(index)}>
                {item}
                <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>&#x25BC;</span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                <p>This is the answer to the question "{item}".</p>
              </div>
            </div>
          ))}
      </div>

    
    </div>
    
  )
}

export default OverviewDetailCollection