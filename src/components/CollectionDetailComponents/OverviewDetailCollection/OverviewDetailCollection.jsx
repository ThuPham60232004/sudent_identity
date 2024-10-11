import React,{useState} from 'react'
import './OverviewDetailCollection.css'
import { FaChevronDown } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { TiTick } from "react-icons/ti";
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

    <div className="OverviewDetailCollection">
        <div className="OverviewDetailCollectionContainer1">
          <div className="left_OverviewDetailCollectionContainer1">
            <img src='/img/nft-image-1.png' alt='collectionimage1'className='collection-image-1'/>
          </div>
          <div className="right_OverviewDetailCollectionContainer1">
            <div className="mind_ended_con_overview">
                <h3>Mint ended</h3>
                <p>81,188 items were minted</p>
                <button className='view_collection'>View Collection</button>
            </div>
            <div className="content_mind_ended_con_overview">
              <h3>Mind schedule</h3>
              <div className="detail_content_mind_con">
                <div className="detail_content_mind_tick">
                  <TiTick/>
                </div>
                <div className="detail_content_mind">
                  <h2>Public stage</h2>
                  <h3>Starts: October 8 at 11:00 PM GMT+7</h3>
                  <h3>Ends: October 9 at 11:00 PM GMT+7</h3>
                  <p>0.0004 ETH</p>
                  <p>Limit: 5 per wallet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="OverviewDetailCollectionContainer3">
            <div className="left_OverviewDetailCollectionContainer3">
               <img src='/img/nft-image-2.png' alt='collectionimage1'className='collection-image-1'/>
            </div>
            <div className="right_OverviewDetailCollectionContainer3">
              <div className="content_right_overview_con3">
                 <h3>Built by Ready Player Me</h3>
                <p>Ready Player Me is an avatar tech leader used by 4,000 developers globally, delivering 10M+ avatars to games and apps every month. We offer avatar SDKs and APIs that developers can integrate into their apps and games to build avatar systems and save time, boost engagement and unlock new revenue streams.</p>
                <p>Backed by a16z and a roster of tech, web3, and gaming leaders (including the co-founders of King, Twitch, Github, and gmoney), our mission is to build bridges between virtual worlds to create an open and unified digital experience for users.</p>
              </div>
               
            </div>
        </div>
        <div className="OverviewDetailCollectionContainer4">
          <div className="left_OverviewDetailCollectionContainer4">
            <div className="left_overview_con4">
                <h3>Here's what you can do</h3>
              <ul>
                <li>Customize and level up your avatar with digital collectibles</li>
                <li>Immediately use your avatar in games and virtual worlds</li>
                <li>Own an identity that evolves with you across social platforms</li>
                <li>Create your avatar today: <span><a href="#">playerzero.me</a></span></li>
              </ul>
            </div>
            </div>
            <div className="right_OverviewDetailCollectionContainer4">
               <img src='/img/nft-image-3.png' alt='collectionimage1'className='collection-image-1'/>
            </div>
        </div>
        <div className="OverviewDetailCollectionContainer5">
            <div className="left_OverviewDetailCollectionContainer5">
                <h1>FAQ</h1>
            </div>
            <div className="right_OverviewDetailCollectionContainer5">
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
        </div>

    </div>
  )
}

export default OverviewDetailCollection