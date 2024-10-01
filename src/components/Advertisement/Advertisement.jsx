import React from 'react'
import './Advertisement.css'
const Advertisement = () => {
  return (
    <div className='Advertisement'>
        <div className='Container_Adv'>
        <div className='Advertisement_container_one'>
        <h1>CREATE NFT MARKETPLACE FOR YOUR COMMUNITY</h1>
            <ul>
                <li class="text-gradient">Unlock 0% fees</li>
                <li class="text-gradient">2% back on groceries</li>
                <li class="text-gradient">1% back on everything else</li>
            </ul>
            <div className='Advertisement_containertext'>
                <div className='Advertisement_containertext_one'>
                    <h3>3.99 ETH</h3>
                    <h5>FLOOR</h5>
                </div>
                <div className='Advertisement_containertext_two'>
                    <h3>38.7 ETH</h3>
                    <h5>TOTAL VOLUME</h5>
                </div>
                <div className='Advertisement_containertext_three'>
                    <h3>7.2K</h3>
                    <h5>OWNERS</h5>
                </div>
                <div className='Advertisement_containertext_four'>
                    <h3>97.5K</h3>
                    <h5>ITEMS</h5>
                </div>
            </div>
            <div className='Advertisement_button'>
                <h3>CREATE  MARKETPLACE</h3>
            </div>
        </div>
        <div className='Advertisement_container_two'>
            <div className='Advertisement_picture_container_one'>
                <div className='Advertisement_picture1_container'>
                    <img
                        src='https://cafefcdn.com/thumb_w/640/203337114487263232/2022/9/12/photo1662974015465-1662974015547433647874.jpg'
                        alt='picture_1_advertisement'
                        className='picture_1_advertisement'
                    />
                     <div className='Advertisement_picture_border'>
                        <h6>0xba073...18c7</h6>
                        <h5>PUNKS 2: BIZ Collector's</h5>
                        <br/>
                        <h6>Price</h6>
                        <h5>0.002 ETH</h5>
                    </div>
                </div>
            </div>
            <div className='Advertisement_picture_container_two'>
                <div className='Advertisement_picture2_container'>
                     <img
                        src='https://vcdn1-sohoa.vnecdn.net/2021/12/20/bored-ape-nft-accidental-0-728-7234-6530-1639974498.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=C624CYTwi01i3bZb6oNBEg'
                        alt='picture_2_advertisement'
                        className='picture_1_advertisement'
                    />
                    <div className='Advertisement_picture_border'>
                        <h6>0xba073...18c7</h6>
                        <h5>PUNKS: Comic 1 Main Edition</h5>
                        <br/>
                        <h6>Price</h6>
                        <h5>0.004 ETH</h5>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Advertisement