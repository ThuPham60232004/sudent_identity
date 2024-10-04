import React from 'react'
import './Guide.css'
import { FaUserCheck,FaWallet } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import { RiNftFill } from "react-icons/ri";
import { FaMagnifyingGlassArrowRight } from "react-icons/fa6";

const Guide = () => {
  return (
    
    <div className='GuideContainer'>
            <h1>HOW TO CREATE NFT</h1>
        <div className="STEP_GUIDE">
            <div className="flip-card1">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                         <div className='GuideContainer_Header_STEP'>
                             <p className='title_step'>STEP-01</p>
                              <FaUserCheck className='icon_step'/>
                         </div>
                        <h2>LOGIN - REGISTER</h2>
                    </div>
                    <div className="flip-card-back">
                          <div className='GuideContainer_Header_STEP_back'>
                            <FaUserCheck className='icon_step_back'/>
                         </div>
                         <div className="content_step_back">
                            <h2>LOGIN - REGISTER</h2>
                            <p>The first step is to log in or register your account.</p>
                         </div>
                    </div>
                </div>
            </div>
            <div className="flip-card2">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                         <div className='GuideContainer_Header_STEP'>
                             <p className='title_step'>STEP-02</p>
                               <FaWallet className='icon_step'/>
                         </div>
                        <h2>SET UP YOUR WALLET</h2>                       
                    </div>
                    <div className="flip-card-back">
                          <div className='GuideContainer_Header_STEP_back'>
                            <FaWallet className='icon_step_back'/>
                         </div>
                         <div className="content_step_back">
                            <h2>SET UP YOUR WALLET</h2>
                            <p>Set up your digital wallet to store your NFTs securely.</p>
                         </div>
                    </div>
                </div>
            </div>
            <div className="flip-card3">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className='GuideContainer_Header_STEP'>
                             <p className='title_step'>STEP-03</p>
                               <MdCreateNewFolder className='icon_step'/>
                         </div>
                        <h2>CREATE YOUR COLLECTION</h2>
                    </div>
                     <div className="flip-card-back">
                          <div className='GuideContainer_Header_STEP_back'>
                            <MdCreateNewFolder className='icon_step_back'/>
                         </div>
                         <div className="content_step_back">
                            <h2>CREATE YOUR COLLECTIONT</h2>
                             <p>Create a collection for your NFTs to showcase your digital assets.</p>
                         </div>
                    </div>
                </div>
            </div>
            <div className="flip-card4">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                         <div className='GuideContainer_Header_STEP'>
                             <p className='title_step'>STEP-04</p>
                               <RiNftFill className='icon_step'/>
                         </div>
                        <h2>ADD YOUR NFTS</h2>
                    </div>
                      <div className="flip-card-back">
                          <div className='GuideContainer_Header_STEP_back'>
                            <RiNftFill className='icon_step_back'/>
                         </div>
                         <div className="content_step_back">
                            <h2>ADD YOUR NFTS</h2>
                             <p>Add your NFTs to the collection you've just created.</p>
                             </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Guide


