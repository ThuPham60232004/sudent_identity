import React from 'react'
import './Guide.css'
const Guide = () => {
  return (
    <div className='GuideContainer'>
        <div className='GuideContainer_STEP1'>
            <div className='GuideContainer_Header_STEP1'>
                <h4>STEP-01</h4>
            </div>
            <img
                src='https://png.pngtree.com/png-vector/20190919/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg'
                alt='login/register'
                className='GuideContainerimg'
            />
            <h2>LOGIN - REGISTER</h2>
            <h5>The first step is to log in or register your account.</h5>
        </div>
        <div className='GuideContainer_STEP2'>
            <div className='GuideContainer_Header_STEP2'>
                <h4>STEP-02</h4>
            </div>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbTxwmS06bLI5WBp-6Tob9ZZqb8L2ozzpf0CGdWImyM30wU0OaZUhkRj7Pyb-Msg6kfY&usqp=CAU'
                alt='connectwallet'
                className='GuideContainerimg'
            />
            <h2>SET UP YOUR WALLET</h2>
            <h5>Set up your digital wallet to store your NFTs securely.</h5>
        </div>
        <div className='GuideContainer_STEP3'>
            <div className='GuideContainer_Header_STEP3'>
                <h4>STEP-03</h4>
            </div>
            <img
                src='https://wishu.io/wp-content/uploads/2024/03/CoolCats-NFT-OpenSea.webp'
                alt='CREATE YOUR COLLECTION'
                className='GuideContainerimg'
            />
            <h2>CREATE YOUR COLLECTION</h2>
            <h5>Create a collection for your NFTs to showcase your digital assets.</h5>
        </div>
        <div className='GuideContainer_STEP4'>
            <div className='GuideContainer_Header_STEP4'>
                <h4>STEP-04</h4>
            </div>
            <img
                src='https://www.domusweb.it/content/dam/domusweb/en/news/2021/05/13/how-to-mint-your-own-nft-in-5-simple-steps/nft.jpg.foto.rmedium.jpg'
                alt='ADD YOUR NFTS'
                className='GuideContainerimg'
            />
            <h2>ADD YOUR NFTS</h2>
            <h5>Add your NFTs to the collection you've just created.</h5>
        </div>
    </div>
  )
}

export default Guide
