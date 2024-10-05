import React from 'react'

const OffersDetailCollection = ({ offers }) => {
    if (!offers) {
    return <div>Loading...</div>;
  }
  return (
    <div className="offers_detail_collection_container">
      <div className="filter_offers">
        <div className="left_filter_offers">

        </div>
        <div className="right_filter_offers">
          <div className="offer_small_group">
            <p>Volume</p>
            <h3>98 ETH</h3>
          </div>
            <div className="offer_small_group">
            <p>Floor</p>
            <h3>98 ETH</h3>
          </div>
            <div className="offer_small_group">
            <p>Best offer</p>
            <h3>98 ETH</h3>
          </div>
            <div className="offer_small_group">
            <p>Total offer volume</p>
            <h3>98 ETH</h3>
          </div>
        </div>
      </div>
      <div className="offers_detail_collection_body">
        <div className="left_offers_container">
          <div className="filter_search_offers">
            <h3>Filter</h3>
            <div className="search_input_offers">
              <input type="text" placeholder='Search' />
              <p>icon search</p>
            </div>
          </div>

          <div className="trait_top_offer">
            <div className="title_trait_top_offer">
              <p>TRAIT</p>
              <p>TOP  OFFER</p>
            </div>
            <div className="value_trait_top_offer">
              <div className="value_trait">
                <p>No trait</p>
              </div>
              <div className="value_top_offer">
                <h3>0.0053 ETH</h3>
                <p>Volume: 0.9223 WETH</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right_offers_container_main">
            <div className="right_offers_container">
              <div className="offers-table-container">
      <table className="offers-table">
        <thead>
          <tr>
            <th>Offer Price</th>
            <th>Total Volume</th>
            <th>Total Offers</th>
            <th>Bidders</th>
            <th>Your Offers</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer, index) => (
            <tr key={index}>
              <td>{offer.price}</td>
              <td>{offer.totalVolume}</td>
              <td>{offer.totalOffers}</td>
              <td>
                <img 
                  src={offer.bidderProfileImage} 
                  alt="Bidder Profile" 
                  className="bidder-image"
                /> {offer.bidders}
              </td>
              <td>{offer.yourOffers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OffersDetailCollection