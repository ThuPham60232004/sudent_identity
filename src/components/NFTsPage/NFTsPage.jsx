import React from 'react'
import NFTs from '../NFTs/NFTs'
import Sidebar from '../sidebar/Sidebar'
import './NFTsPage.css'
import Navbar from '../navbar/Navbar'
const NFTsPage = () => {
  return (
    <div className='NFTs-Container'>
        <div className='NFTs-Container-Sidebar'>
            <Sidebar/>
        </div>
        <div className='NFTs-Container-NFT'>
            <Navbar/>
            <NFTs/>
        </div>
    </div>
  )
}

export default NFTsPage