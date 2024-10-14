import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import './AllCollection.css';

const AllCollection = () => {
  const marketCapData = [
    { time: '03:00 PM', value: 1.5 },
    { time: '06:00 PM', value: 2.6 },
    { time: '09:00 PM', value: 7 },
    { time: '12:00 AM', value: 9 },
    { time: '03:00 AM', value: 2.0 },
    { time: '06:00 AM', value: 22.1 },
  ];

  const salesVolumeData = [
    { time: '06:00 PM', value: 0.3 },
    { time: '09:00 PM', value: 0.5 },
    { time: '12:00 AM', value: 0.8 },
    { time: '03:00 AM', value: 1.2 },
    { time: '06:00 AM', value: 1.5 },
    { time: '09:00 AM', value: 1.8 },
  ];

  const totalSalesData = [
    { time: '06:00 PM', value: 1200 },
    { time: '09:00 PM', value: 1500 },
    { time: '12:00 AM', value: 1800 },
    { time: '03:00 AM', value: 2000 },
    { time: '06:00 AM', value: 2400 },
    { time: '09:00 AM', value: 3000 },
  ];

  const nftCollections = [
    {
      rank: 1,
      collection: 'Pudgy Penguins',
      chains: ['Ethereum', 'Base'],
      floorPrice: '$2.47',
      avgPrice: '$22.37k',
      marketCap: '$406.74M',
      volume: '$669.51k',
      percentVolume: '+103.15%',
      traders: 40,
      sales: 30,
      changeFP: '-1.97%',
      changeAP: '-4.9%',
      changeMC: '-1.36%',
      changeTraders: '+100%',
      changeSales: '+114.28%',
    },
    {
      rank: 2,
      collection: 'Milady Maker',
      chains: ['Ethereum', 'Immutable X'],
      floorPrice: '$11.8k',
      avgPrice: '$11.84k',
      marketCap: '$237.57M',
      volume: '$609.97k',
      percentVolume: '-18.3%',
      traders: 66,
      sales: 51,
      changeFP: '+15.64%',
      changeAP: '+12.01%',
      changeMC: '+15.33%',
      changeTraders: '-32.65%',
      changeSales: '-30.13%',
    },
    {
      rank: 3,
      collection: 'Mad Lads',
      chains: ['Solana'],
      floorPrice: '-',
      avgPrice: '$7.34k',
      marketCap: '-',
      volume: '$505.79k',
      percentVolume: '+151.01%',
      traders: 90,
      sales: 68,
      changeFP: '-',
      changeAP: '+14.32%',
      changeMC: '-',
      changeTraders: '+119.51%',
      changeSales: '+119.35%',
    },
  ];

  const nftData = [
    { name: 'Skies', chain: 'Polygon', volume: '4,062,073.17 MATIC', marketCap: '5,872,755.54 MATIC', floorPrice: '13,162.29 MATIC', avgPrice: '13,721.39 MATIC', sales: 297, assets: 428, owners: 129, ownerPercent: '10.05 %' },
    { name: 'Fruit', chain: 'Polygon', volume: '3,378,399.55 MATIC', marketCap: '2,432,447.68 MATIC', floorPrice: '7,237.66 MATIC', avgPrice: '7,507.55 MATIC', sales: 450, assets: 324, owners: 10688, ownerPercent: '--' },
    { name: 'Based Zaza', chain: 'Base', volume: '473.26 ETH', marketCap: '2,500 ETH', floorPrice: '0.00027 ETH', avgPrice: '0.5 ETH', sales: 1021, assets: 5000, owners: 1429, ownerPercent: '28.58 %' },
    { name: 'Skies', chain: 'Base', volume: '373.16 ETH', marketCap: '882.38 ETH', floorPrice: '2.055 ETH', avgPrice: '2.0616 ETH', sales: 181, assets: 428, owners: 106, ownerPercent: '24.77 %' },
    { name: 'PudgyPenguins', chain: 'Ethereum', volume: '343.33 ETH', marketCap: '80,304.21 ETH', floorPrice: '8.9597 ETH', avgPrice: '9.0351 ETH', sales: 38, assets: 8888, owners: 5124, ownerPercent: '57.65 %' },
    { name: 'BaseLady', chain: 'Polygon', volume: '2,021,052 MATIC', marketCap: '30,310,100 MATIC', floorPrice: '24 MATIC', avgPrice: '10,100 MATIC', sales: 248, assets: 3001, owners: 213, ownerPercent: '7.1 %' },
    { name: 'Lil Penguins', chain: 'Polygon', volume: '1,866,183.13 MATIC', marketCap: '61,660,355.69 MATIC', floorPrice: '6,983.45 MATIC', avgPrice: '6,937.48 MATIC', sales: 269, assets: 8888, owners: 104, ownerPercent: '1.17 %' },
    { name: 'Milady', chain: 'Ethereum', volume: '266.99 ETH', marketCap: '46,665.67 ETH', floorPrice: '4.6482 ETH', avgPrice: '4.6666 ETH', sales: 55, assets: 10000, owners: 5293, ownerPercent: '52.93 %' },
  ];

  return (
    <div className="clt-all-collection-container">
      <div className="clt-stat-section">
        <h2 className="clt-section-title">Highest Price NFT Stats</h2>
        <p className="clt-description">
          Listed below are the stats for NFT collections and individual assets that have sold for the highest prices. We list the data in descending order. Data can be reordered by clicking on the column title. Only collections with a transaction in the last 30 days are included.
        </p>
        <div className="clt-stats-grid">
          {/* Market Cap */}
          <div className="clt-stat-item">
            <div className="clt-stat-header">
              <h3>Market Cap</h3>
              <span className="clt-time-period">24h</span>
            </div>
            <div className="clt-stat-value">$22,121,952,526.8</div>
            <div className="clt-stat-change clt-positive">+10.51% (24h)</div>
            <div className="clt-chart">
              <LineChart width={250} height={100} data={marketCapData}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </div>
          </div>

          {/* Sales Volume */}
          <div className="clt-stat-item">
            <div className="clt-stat-header">
              <h3>Sales Volume (24h)</h3>
              <span className="clt-time-period">24h</span>
            </div>
            <div className="clt-stat-value">$20,047,600.97</div>
            <div className="clt-stat-change clt-positive">+51.83% (24h)</div>
            <div className="clt-chart">
              <BarChart width={250} height={100} data={salesVolumeData}>
                <Bar dataKey="value" fill="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
              </BarChart>
            </div>
          </div>

          {/* Total Sales */}
          <div className="clt-stat-item">
            <div className="clt-stat-header">
              <h3>Total Sales (24h)</h3>
              <span className="clt-time-period">24h</span>
            </div>
            <div className="clt-stat-value">48,079</div>
            <div className="clt-stat-change clt-negative">-5.87% (24h)</div>
            <div className="clt-chart">
              <LineChart width={250} height={100} data={totalSalesData}>
                <Line type="monotone" dataKey="value" stroke="#ff7300" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </div>
          </div>
        </div>
      </div>

      <div className="clt-nft-collection-section">
        <h2 className="clt-section-title">Top NFT Collections</h2>
        <table className="clt-nft-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Collection</th>
              <th>Chains</th>
              <th>Floor Price</th>
              <th>Average Price</th>
              <th>Market Cap</th>
              <th>Volume</th>
              <th>% Volume</th>
              <th>Traders</th>
              <th>Sales</th>
              <th>Change FP</th>
              <th>Change AP</th>
              <th>Change MC</th>
              <th>Change Traders</th>
              <th>Change Sales</th>
            </tr>
          </thead>
          <tbody>
            {nftCollections.map((nft) => (
              <tr key={nft.rank}>
                <td>{nft.rank}</td>
                <td>{nft.collection}</td>
                <td>{nft.chains.join(', ')}</td>
                <td>{nft.floorPrice}</td>
                <td>{nft.avgPrice}</td>
                <td>{nft.marketCap}</td>
                <td>{nft.volume}</td>
                <td>{nft.percentVolume}</td>
                <td>{nft.traders}</td>
                <td>{nft.sales}</td>
                <td className={nft.changeFP.includes('-') ? 'clt-negative' : 'clt-positive'}>{nft.changeFP}</td>
                <td className={nft.changeAP.includes('-') ? 'clt-negative' : 'clt-positive'}>{nft.changeAP}</td>
                <td className={nft.changeMC.includes('-') ? 'clt-negative' : 'clt-positive'}>{nft.changeMC}</td>
                <td className={nft.changeTraders.includes('-') ? 'clt-negative' : 'clt-positive'}>{nft.changeTraders}</td>
                <td className={nft.changeSales.includes('-') ? 'clt-negative' : 'clt-positive'}>{nft.changeSales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="clt-nft-data-section">
        <h2 className="clt-section-title">NFT Data Overview</h2>
        <table className="clt-nft-data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Chain</th>
              <th>Volume</th>
              <th>Market Cap</th>
              <th>Floor Price</th>
              <th>Average Price</th>
              <th>Sales</th>
              <th>Assets</th>
              <th>Owners</th>
              <th>Owner %</th>
            </tr>
          </thead>
          <tbody>
            {nftData.map((nft) => (
              <tr key={nft.name}>
                <td>{nft.name}</td>
                <td>{nft.chain}</td>
                <td>{nft.volume}</td>
                <td>{nft.marketCap}</td>
                <td>{nft.floorPrice}</td>
                <td>{nft.avgPrice}</td>
                <td>{nft.sales}</td>
                <td>{nft.assets}</td>
                <td>{nft.owners}</td>
                <td>{nft.ownerPercent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCollection;
