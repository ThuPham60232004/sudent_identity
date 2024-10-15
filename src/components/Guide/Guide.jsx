import React from 'react'
import './Guide.css'
import { IoArrowRedoSharp } from "react-icons/io5";
const Guide = () => {
  return (
    <div className="GuideContainer_parent">
        <div className='GuideContainer'>
            <h1>HOW TO CREATE NFT</h1>
        <div className="STEP_GUIDE">
            <div className="flip-card1">
                <div className="flip_card_con1">
                    <div className="flip_card_con">
                        <div className="number_step_card1">
                            <IoArrowRedoSharp className='icon_guide_step'/>
                            <h3>STEP - 1</h3>
                        </div>
                        <div className="content_step_guide">
                           <h2>Login - Register</h2>
                            <p>The first step is to log in or register your account.</p>
                        </div>
                    </div>
                </div>
            </div>
              <div className="flip-card2">
                <div className="flip_card_con2">
                    <div className="flip_card_con">
                        <div className="number_step_card2">
                            <IoArrowRedoSharp className='icon_guide_step'/>
                            <h3>STEP - 2</h3>
                        </div>
                        <div className="content_step_guide">
                           <h2>Set up your wallet</h2>
                            <p>Set up your digital wallet to store your NFTs securely.</p>
                        </div>
                    </div>
                </div>
            </div>
            
             <div className="flip-card3">
                <div className="flip_card_con3">
                    <div className="flip_card_con">
                        <div className="number_step_card3">
                            <IoArrowRedoSharp className='icon_guide_step'/>
                            <h3>STEP - 3</h3>
                        </div>
                        <div className="content_step_guide">
                           <h2>Create your Collection</h2>
                            <p>Create a collection for your NFTs to showcase your digital assets.</p>
                        </div>
                    </div>
                </div>
            </div>
           <div className="flip-card4">
                <div className="flip_card_con4">
                    <div className="flip_card_con">
                        <div className="number_step_card4">
                            <IoArrowRedoSharp className='icon_guide_step'/>
                            <h3>STEP - 4</h3>
                        </div>
                        <div className="content_step_guide">
                           <h2>Add your NFTS</h2>
                            <p>Add your NFTs to the collection you've just created.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Guide


