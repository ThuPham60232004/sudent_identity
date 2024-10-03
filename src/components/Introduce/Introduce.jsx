// import React from 'react'
// import './Introduce.css'
// const Introduce = () => {
//   return (
//     <div className='IntroduceContainer'>
//         <div className='IntroduceText'>
            // <h1>PIXEL VAULT CORE COLLECTION</h1>
            // <h4>The Pixel Vault Core Collection consists of 146 concept characters 
            //     including two special mints collaboratively designed by project 
            //     creatives, Chris Wahl and Odious. The collection reflects its broad 
            //     reach, which includes 16 PUNKS, 48 crossover variations, and 80 
            //     Inhabitants Core Identities
            // </h4>
  
            // <div className='Introducetext'>
            //         <div className='Introduceone'>
            //             <h3>3.99 ETH</h3>
            //             <h5>FLOOR</h5>
            //         </div>
            //         <div className='Introducetwo'>
            //             <h3>38.7 ETH</h3>
            //             <h5>TOTAL VOLUME</h5>
            //         </div>
            //         <div className='Introducethree'>
            //             <h3>7.2K</h3>
            //             <h5>OWNERS</h5>
            //         </div>
            //         <div className='Introducefour'>
            //             <h3>97.5K</h3>
            //             <h5>ITEMS</h5>
            //         </div>
            //     </div>
            //     <div className='Introducebutton'>
            //         <h3>CREATE  MARKETPLACE</h3>
            //     </div>
            // </div>
//         <div className='IntroduceImg'>
//             <img
//                 src='/img/punk.png'
//                 alt='IntroduceImg'
//                 className='IntroduceImg1'
//             />
//         </div>
//     </div>
//   )
// }

// export default Introduce



import React from 'react'
import './Introduce.css'
const Introduce = () => {
  return (
    <div className='IntroduceContainer'>
        <div className='IntroduceText'>
            <h1>PIXEL VAULT CORE COLLECTION</h1>
            <p>The Pixel Vault Core Collection consists of 146 concept characters 
                including two special mints collaboratively designed by project 
                creatives, Chris Wahl and Odious. The collection reflects its broad 
                reach, which includes 16 PUNKS, 48 crossover variations, and 80 
                Inhabitants Core Identities
            </p>
            <div className="Introducetext_btn">
                <div className='Introducetext'>
                    <div className='Introduce_con'>
                        <p>3.99 ETH</p>
                        <p>FLOOR</p>
                    </div>
                    <div className='Introduce_con'>
                        <p>38.7 ETH</p>
                        <p>VOLUME</p>
                    </div>
                    <div className='Introduce_con'>
                        <p>7.2K</p>
                        <p>OWNERS</p>
                    </div>
                    <div className='Introduce_con'>
                        <p>97.5K</p>
                        <p>ITEMS</p>
                    </div>
            </div>
            <div className='button_intro'>
                <button className='Introducebutton'><a href="#">CREATE  MARKETPLACE</a></button>
            </div>
            </div>
            
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