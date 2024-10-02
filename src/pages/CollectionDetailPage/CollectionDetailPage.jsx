import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './CollectionDetailPage.css';
import HeaderDetailCollection from '../../components/CollectionDetailComponents/HeaderDetailCollection/HeaderDetailCollection';
import Navbar from '../../components/navbar/Navbar';
import { useLocation } from 'react-router-dom';
const CollectionDetailPage = () => {
    const location = useLocation();
    const { item } = location.state || {};
  return (
    <div className='CollectionDetailPageContainer'>
      <Navbar />
      <br/> <br/> <br/> <br/> <br/>
      <HeaderDetailCollection item={item} />
      <div className='CollectionDetailPageSelect'>
        <div className='CollectionDetailPageItems'>
          <NavLink to="overview" activeClassName="active">
            <h3>Overview</h3>
          </NavLink>
        </div>
        <div className='CollectionDetailPageItems'>
          <NavLink to="items" activeClassName="active">
            <h3>Items</h3>
          </NavLink>
        </div>
        <div className='CollectionDetailPageItems'>
          <NavLink to="offers" activeClassName="active">
            <h3>Offers</h3>
          </NavLink>
        </div>
        <div className='CollectionDetailPageItems'>
          <NavLink to="analytics" activeClassName="active">
            <h3>Analytics</h3>
          </NavLink>
        </div>
        <div className='CollectionDetailPageItems'>
          <NavLink to="activity" activeClassName="active">
            <h3>Activity</h3>
          </NavLink>
        </div>
      </div>

    
      <Outlet />
    </div>
  );
}

export default CollectionDetailPage;
