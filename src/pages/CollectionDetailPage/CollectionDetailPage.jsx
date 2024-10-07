// import React, { useContext, useEffect } from 'react';
// import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
// import './CollectionDetailPage.css';
// import HeaderDetailCollection from '../../components/CollectionDetailComponents/HeaderDetailCollection/HeaderDetailCollection';
// import Navbar from '../../components/navbar/Navbar';
// import { ItemContext } from '../../context/ItemContext';



// const CollectionDetailPage = () => {
//     const { item } = useContext(ItemContext);
//     const navigate = useNavigate();
//     const location = useLocation();


//     useEffect(() => {
//         if (location.pathname === '/CollectionDetailPage') {
//             navigate('overview');
//         }
//     }, [location.pathname, navigate]);

//     return (
//         <div className='CollectionDetailPageContainer'>
//             <Navbar />
//             <br /> <br /> <br /> <br /> <br />
//             <HeaderDetailCollection item={item} />
//             <div className='CollectionDetailPageSelect'>
//                 <div className='CollectionDetailPageItems'>
//                     <NavLink 
//                         to="overview" 
//                         className={({ isActive }) => isActive ? "active" : ""}
//                     >
//                         <h3>Overview</h3>
//                     </NavLink>
//                 </div>
//                 <div className='CollectionDetailPageItems'>
//                     <NavLink 
//                         to="items" 
//                         className={({ isActive }) => isActive ? "active" : ""}
//                     >
//                         <h3>Items</h3>
//                     </NavLink>
//                 </div>
//                 <div className='CollectionDetailPageItems'>
//                     <NavLink 
//                         to="offers" 
//                         className={({ isActive }) => isActive ? "active" : ""}
//                     >
//                         <h3>Offers</h3>
//                     </NavLink>
//                 </div>
//                 <div className='CollectionDetailPageItems'>
//                     <NavLink 
//                         to="analytics" 
//                         className={({ isActive }) => isActive ? "active" : ""}
//                     >
//                         <h3>Analytics</h3>
//                     </NavLink>
//                 </div>
//                 <div className='CollectionDetailPageItems'>
//                     <NavLink 
//                         to="activity" 
//                         className={({ isActive }) => isActive ? "active" : ""}
//                     >
//                         <h3>Activity</h3>
//                     </NavLink>
//                 </div>
//             </div>
//             <Outlet />
//         </div>
//     );
// }

// export default CollectionDetailPage;






// import React, { useContext, useEffect } from 'react';
// import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
// import './CollectionDetailPage.css';
// import HeaderDetailCollection from '../../components/CollectionDetailComponents/HeaderDetailCollection/HeaderDetailCollection';
// import Navbar from '../../components/navbar/Navbar';
// import { ItemContext } from '../../context/ItemContext';

// const CollectionDetailPage = () => {
//     const { item } = useContext(ItemContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     // Sử dụng dữ liệu giả nếu context không có giá trị
//     const itemData = item || {
//       imageUrl: './img/collection.png', 
//       name: 'CryptoPunks', 
//       floorPrice: '15 ETH', 
//       volume: '500 ETH',
//       item: '10,000', 
//     };

//     useEffect(() => {
//         if (location.pathname === '/CollectionDetailPage') {
//             navigate('overview');
//         }
//     }, [location.pathname, navigate]);

//     return (
//         <div className='CollectionDetailPageContainer'>
//             <Navbar />
//             <br /> <br /> <br /> <br /> <br />
//             <HeaderDetailCollection item={itemData} /> {/* Truyền dữ liệu item */}
//             <div className='CollectionDetailPageSelect'>
//                 <div className='CollectionDetailPageItems'>
//                     <NavLink 
//                         to="overview" 
//                         className={({ isActive }) => isActive ? "active" : ""}
//                     >
//                         <h3>Overview</h3>
//                     </NavLink>
//                 </div>
//                 <div className='CollectionDetailPageItems'>
//                     <NavLink 
//                         to="items" 
//                         className={({ isActive }) => isActive ? "active" : ""}
//                     >
//                         <h3>Items</h3>
//                     </NavLink>
//                 </div>
//                 <div className='CollectionDetailPageItems'>
//                     <NavLink 
//                         to="offers" 
//                         className={({ isActive }) => isActive ? "active" : ""}
//                     >
//                         <h3>Offers</h3>
//                     </NavLink>
//                 </div>
//                 <div className='CollectionDetailPageItems'>
//                     <NavLink 
//                         to="analytics" 
//                         className={({ isActive }) => isActive ? "active" : ""}
//                     >
//                         <h3>Analytics</h3>
//                     </NavLink>
//                 </div>
//                 <div className='CollectionDetailPageItems'>
//                     <NavLink 
//                         to="activity" 
//                         className={({ isActive }) => isActive ? "active" : ""}
//                     >
//                         <h3>Activity</h3>
//                     </NavLink>
//                 </div>
//             </div>
//             <Outlet />
//         </div>
//     );
// }

// export default CollectionDetailPage;





import React, { useContext, useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './CollectionDetailPage.css';
import HeaderDetailCollection from '../../components/CollectionDetailComponents/HeaderDetailCollection/HeaderDetailCollection';
import Navbar from '../../components/navbar/Navbar';
import { ItemContext } from '../../context/ItemContext';
import OffersDetailCollection from '../../components/CollectionDetailComponents/OffersDetailCollection/OffersDetailCollection'; 

const CollectionDetailPage = () => {
    const { item } = useContext(ItemContext);
    const navigate = useNavigate();
    const location = useLocation();

    // Mock data for item if context is empty
    const itemData = item || {
        imageUrl: './img/collection.png', 
        name: 'CryptoPunks', 
        floorPrice: '15 ETH', 
        volume: '500 ETH',
        item: '10,000', 
    };

    

    useEffect(() => {
        if (location.pathname === '/CollectionDetailPage') {
            navigate('overview');
        }
    }, [location.pathname, navigate]);

    return (
        <div className='CollectionDetailPageContainer'>
            <Navbar />
            <br /> <br /> <br /> <br /> <br />
            <HeaderDetailCollection item={itemData} />
            <div className='CollectionDetailPageSelect'>
                <div className='CollectionDetailPageItems'>
                    <NavLink to="overview" className={({ isActive }) => isActive ? "active" : ""}>
                        <h3>Overview</h3>
                    </NavLink>
                </div>
                <div className='CollectionDetailPageItems'>
                    <NavLink to="items" className={({ isActive }) => isActive ? "active" : ""}>
                        <h3>Items</h3>
                    </NavLink>
                </div>
                <div className='CollectionDetailPageItems'>
                    <NavLink to="offers" className={({ isActive }) => isActive ? "active" : ""}>
                        <h3>Offers</h3>
                    </NavLink>
                </div>
                <div className='CollectionDetailPageItems'>
                    <NavLink to="analytics" className={({ isActive }) => isActive ? "active" : ""}>
                        <h3>Analytics</h3>
                    </NavLink>
                </div>
                <div className='CollectionDetailPageItems'>
                    <NavLink to="activity" className={({ isActive }) => isActive ? "active" : ""}>
                        <h3>Activity</h3>
                    </NavLink>
                </div>
            </div>
            <Outlet />

        </div>
    );
}

export default CollectionDetailPage;
