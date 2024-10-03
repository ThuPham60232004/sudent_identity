// import React from 'react'
// import './Guide.css'
// import { FaUserCheck,FaWallet } from "react-icons/fa";
// import { MdCreateNewFolder } from "react-icons/md";
// import { VscGitPullRequestCreate } from "react-icons/vsc";

// const Guide = () => {
//   return (

//     <div className='GuideContainer'>
//         <div className="title_step">
//             <h1>CREATE NFT</h1>
//         </div>
//         <div className="STEP_GUIDE">
//             <div className='GuideContainer_STEP'>
//                 <div className='GuideContainer_Header_STEP'>
//                     <h4>STEP-01</h4>
//                 </div>
//                 <FaUserCheck/>
//                 {/* <img
//                     src='https://png.pngtree.com/png-vector/20190919/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg'
//                     alt='login/register'
//                     className='GuideContainerimg'
//                 /> */}
//                 <h2>LOGIN - REGISTER</h2>
//                 <h5>The first step is to log in or register your account.</h5>
//             </div>
//             <div className='GuideContainer_STEP'>
//                 <div className='GuideContainer_Header_STEP'>
//                     <h4>STEP-02</h4>
//                 </div>
//                 {/* <img
//                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbTxwmS06bLI5WBp-6Tob9ZZqb8L2ozzpf0CGdWImyM30wU0OaZUhkRj7Pyb-Msg6kfY&usqp=CAU'
//                     alt='connectwallet'
//                     className='GuideContainerimg'
//                 /> */}
//                 <FaWallet/>
//                 <h2>SET UP YOUR WALLET</h2>
//                 <h5>Set up your digital wallet to store your NFTs securely.</h5>
//             </div>
//             <div className='GuideContainer_STEP'>
//                 <div className='GuideContainer_Header_STEP'>
//                     <h4>STEP-03</h4>
//                 </div>
//                 {/* <img
//                     src='https://wishu.io/wp-content/uploads/2024/03/CoolCats-NFT-OpenSea.webp'
//                     alt='CREATE YOUR COLLECTION'
//                     className='GuideContainerimg'
//                 /> */}
//                 <MdCreateNewFolder/>
//                 <h2>CREATE YOUR COLLECTION</h2>
//                 <h5>Create a collection for your NFTs to showcase your digital assets.</h5>
//             </div>
//             <div className='GuideContainer_STEP'>
//                 <div className='GuideContainer_Header_STEP'>
//                     <h4>STEP-04</h4>
//                 </div>
//                 {/* <img
//                     src='https://www.domusweb.it/content/dam/domusweb/en/news/2021/05/13/how-to-mint-your-own-nft-in-5-simple-steps/nft.jpg.foto.rmedium.jpg'
//                     alt='ADD YOUR NFTS'
//                     className='GuideContainerimg'
//                 /> */}
//                 <VscGitPullRequestCreate/>
//                 <h2>ADD YOUR NFTS</h2>
//                 <h5>Add your NFTs to the collection you've just created.</h5>
//             </div>
//         </div>
        
//     </div>
//   )
// }

// export default Guide



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


