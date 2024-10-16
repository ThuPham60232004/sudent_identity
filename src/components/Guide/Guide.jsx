import React from 'react'
import './Guide.css'
import { BiSolidBadgeCheck } from "react-icons/bi";
import { HiPresentationChartLine } from "react-icons/hi";
import { AiOutlineSlackSquare } from "react-icons/ai";
import { GiWallet } from "react-icons/gi";
import { Link } from "react-router-dom";

const Guide = () => {
    const steps = [
    {
      id: 1,
      title: 'Login - Register',
      description: 'The first step is to log in or register your account.',
      icon: <BiSolidBadgeCheck/>,
    },
    {
      id: 2,
      title: 'Set up your wallet',
      description: 'Set up your digital wallet to store your NFTs securely.',
      icon: <GiWallet/>,
    },
    {
      id: 3,
      title: 'Create your Collection',
      description: 'Create a collection for your NFTs to showcase your digital assets.',
      icon: <AiOutlineSlackSquare/>,
    },
     {
      id: 4,
      title: 'Add your NFTS',
      description: 'Add your NFTs to the collection you are just created.',
      icon: <HiPresentationChartLine /> ,
    },
   
  ];
  return (
    <div className="GuideContainer_parent">
        <div className='GuideContainer'>
           <div className="left_step_guide">
                <h3>How to create NFT</h3>
                <p>Describe important details like price, value, length of service, and why it’s unique. Or use these ...<br/>Describe important details like price, value, length of service, and why it’s unique. Or use these ...</p>
                <div className="created_nft_left_step_guide">
                      <button className="btn_create_nft_step_guid">
                        <Link to='/CreatePage' className='link_to_create_nft'>
                            Create NFT
                        </Link>
                    </button>
                </div>
                
            </div> 
            <div className="right_step_guide">
                {steps.map((item, index) => (
                <div key={index} className="step_guide_box">
                    <div className="title_step_guide_box">
                        <div className="icon_step_guide_box">
                             {item.icon}
                        </div>
                        <h3>{item.title}</h3>
                    </div>
                   
                    <p>{item.description}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Guide
