import React from 'react'
import './Introduce.css'
const Introduce = () => {
  return (
    <div className='IntroduceContainer'>
        <div className='IntroduceText'>
            <h1>PIXEL VAULT CORE COLLECTION</h1>
            <p>The Pixel Vault Core Collection consists of 146 concept characters 
                including two special mints collaboratively designed by project 
                creatives, Chris Wahl and Odious. <br/>The collection reflects its broad 
                reach, which includes 16 PUNKS, 48 crossover variations, and 80 
                Inhabitants Core Identities<br/>The Pixel Vault Core Collection consists of 146 concept characters 
                including two special mints collaboratively designed by project 
                creatives, Chris Wahl and Odious.
            </p>    
        </div> 
        <div className='IntroduceImg'>
            <img
                src='/img/punk.png'
                alt='IntroduceImg'
                className='IntroduceImg1'
            />
        </div>
    </div>
    
  )
}

export default Introduce