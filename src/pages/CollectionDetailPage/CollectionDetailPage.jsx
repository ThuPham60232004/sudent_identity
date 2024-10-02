import React from 'react'
import './CollectionDetailPage.css'
import HeaderDetailCollection from '../../components/CollectionDetailComponents/HeaderDetailCollection/HeaderDetailCollection'
const CollectionDetailPage = () => {
  return (
    <div className='CollectionDetailPageContainer'>
        <HeaderDetailCollection/>
        <div className='CollectionDetailPageSelect'>
            <div className='CollectionDetailPageItems'>
                <a href='OverviewDetailCollection'>
                    <h3>Overview</h3>
                </a> 
            </div>
            <div className='CollectionDetailPageItems'>
                <a href='IteamDetailCollection'>
                    <h3>Items</h3>
                </a>
            </div>
            <div className='CollectionDetailPageItems'>
                <a href='OffersDetailCollection'>
                    <h3>Offers</h3>
                </a>
            </div>
            <div className='CollectionDetailPageItems'>
                <a href='AnalyticsDetailCollection'>
                    <h3>Analytics</h3>
                </a>
            </div>
            <div className='CollectionDetailPageItems'>
                 <a href='ActivityDetailCollection'>
                    <h3>Activity</h3>
                 </a>
            </div>
        </div>
    </div>
  )
}

export default CollectionDetailPage