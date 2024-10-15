import React, { useContext } from 'react';
import { ItemContext } from "../../context/ItemContext";
import { useNavigate, Link } from 'react-router-dom';
import './SubscriptionPlans.css'; 

const SubscriptionPlans = () => {
    const { setItem } = useContext(ItemContext);
    const navigate = useNavigate();

    const handleClick = (item) => {
        setItem(item);
        navigate("/CollectionDetailPage", { state: { item } });
    }

    const plans = [
        {
            rank: 1,
            name: "Courtyard.io",
            name_collection: "Comic 1 Main Edition",
            floorPrice: "0.004 ETH",
            volume: "15.1 ETH",
            item: "8",
            imageUrl: "https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631",
        },
        {
            rank: 2,
            name: "KIP Protocol Genesis Pass",
            name_collection: "Comic 1 Main Edition",
            floorPrice: "0.05 ETH",
            volume: "4.5 ETH",
            item: "8",
            imageUrl: "https://coinstats.app/blog/wp-content/uploads/2023/06/The-Rise-of-NFTs-How-Will-AI-Impact-the-NFT-Art-Ecosystem-copy-1-1200x675.webp",
        },
        {
            rank: 3,
            name: "Pepels",
            name_collection: "Comic 1 Main Edition",
            floorPrice: "0.09 ETH",
            volume: "4.3 ETH",
            item: "9",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXny2o2hbmXC-MOmVaZsCPvfLEZOMvzgcP6rxEjIyxNEMDdNfuPwpmWZiDR9Mvmj7u_oM&usqp=CAU",
        },
        {
            rank: 4,
            name: "egg",
            name_collection: "Comic 1 Main Edition",
            floorPrice: "0.14 ETH",
            volume: "6 ETH",
            item: "1",
            imageUrl: "https://miro.medium.com/v2/resize:fit:1358/1*aN5K9yD54q6XvJJEW8_Q7A.jpeg",
        },
    ];

    return (
        <div className="subsubscription_parent_container">
            <div className="subsubscription_parent">
                <div className="explore_all_hot_collection">
                    <p className='title_sub'>HOT COLLECTIONS</p>

                    {/* Nút Explore All Hot Collections */}
                    <button className="btn_explore_all_collection">
                        <Link to='/AllCollection' className='link_to_collection'>
                            EXPLORE ALL HOT COLLECTIONS
                        </Link>
                    </button>
                </div>

                {/* Danh sách các plans */}
                <div className="subscription-container">
                    {plans.map((item, index) => (
                        <div key={index} className="subscription_con" onClick={() => handleClick(item)}>
                            <img src={item.imageUrl} alt={item.name} className="bg_plan" />
                            <div className="detail_plan_card">
                                <p>{item.name}</p>
                                <h2>{item.name_collection}</h2>
                                <div className="detail_plan_grid">
                                    <div className="detail_plan_content">
                                        <h4>Floor</h4>
                                        <p>{item.floorPrice}</p>
                                    </div>
                                    <div className="detail_plan_content">
                                        <h4>Volume</h4>
                                        <p>{item.volume}</p>
                                    </div>
                                    <div className="detail_plan_content_item">
                                        <h4>Item</h4>
                                        <p>{item.item}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPlans;
