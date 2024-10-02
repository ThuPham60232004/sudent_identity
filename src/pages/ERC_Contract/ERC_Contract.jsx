import React from 'react'
import './ERC_Contract.css'
const ERC_Contract = () => {
  return (
    <div>
        <div className='ERC_Contract'>
            <h1 class="neon-text">PIXEL VAULT FOUNDER'S DAO</h1>
            <div className='ERC_Contract_Containt'>

                <div className='ERC_Contract_One'>
                    <div className="img_erc">
                          <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIOdg5qwoCbLR1lP-SD-cFXchIuiu6kwhC4g&s'
                        alt='ERC_Contract_img'/>
                    </div>
                  
                    <h3 className='title_erc'>ERC-721</h3>
                    <h5 className='content_erc'>A widely popular NFT standard, you can create and import these NFTs into multiple NFT marketplaces</h5>
                </div>
                <div className='ERC_Contract_Two'>
                    <div className="img_erc">
                          <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIOdg5qwoCbLR1lP-SD-cFXchIuiu6kwhC4g&s'
                        alt='ERC_Contract_img'
                        className='ERC_Contract_img'
                    />
                    </div>
                  
                    <h3 className='title_erc'>ERC-1155</h3>
                    <h5 className='content_erc'>Create ERC-1155 multi-token standard NFTs and collections on EVM based blockchains</h5>
                </div>
                <div className='ERC_Contract_Three'>
                    <div className="img_erc">
                          <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIOdg5qwoCbLR1lP-SD-cFXchIuiu6kwhC4g&s'
                        alt='ERC_Contract_img'
                        className='ERC_Contract_img'
                    />
                    </div>
                  
                    <h3 className='title_erc'>BEP/ERC-20</h3>
                    <h5 className='content_erc'>Create, Deploy, Import custom BEP/ERC - 20 token standards and use to mint, buy and sell NFTs</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ERC_Contract
