import React from "react";
import './SubscriptionPlans.css'; 

const plans = [
    { id: 1, name: 'Gold Subscription', floor: '0.003', volume: '0.006', owner: '2', image: 'https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416__480.png' },
    { id: 2, name: 'Gold Subscription', floor: '0.003', volume: '0.006', owner: '2', image: 'https://th.bing.com/th/id/OIP.NKYu4zE3x81ZgIgOFFvLHgHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Gold Subscription', floor: '0.003', volume: '0.006', owner: '2', image: 'https://th.bing.com/th/id/OIP.L7HpfxjWNrcZFGzQdVeXjQHaHa?w=626&h=626&rs=1&pid=ImgDetMain' },
    { id: 4, name: 'Gold Subscription', floor: '0.003', volume: '0.006', owner: '2', image: 'https://th.bing.com/th/id/OIP.lRmyoy5BMt5VD1V40kSGLQHaKX?rs=1&pid=ImgDetMain' },
    { id: 5, name: 'Gold Subscription', floor: '0.003', volume: '0.006', owner: '2', image: 'https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2024/08/16/stills-1-1--82--00487784407060607288166-88884556937264690877561.jpg' },
    { id: 6, name: 'Gold Subscription', floor: '0.003', volume: '0.006', owner: '2', image: 'https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2024/08/16/stills-1-1--82--00487784407060607288166-88884556937264690877561.jpg' },
    { id: 7, name: 'Gold Subscription', floor: '0.003', volume: '0.006', owner: '2', image: 'https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2024/08/16/stills-1-1--82--00487784407060607288166-88884556937264690877561.jpg' },
    { id: 8, name: 'Gold Subscription', floor: '0.003', volume: '0.006', owner: '2', image: 'https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2024/08/16/stills-1-1--82--00487784407060607288166-88884556937264690877561.jpg' },
];

const SubscriptionPlans = () => {
    return (
        <div className="subsubscription_parent">
            <p className='title_sub'>HOT COLLECTIONS</p>
            <div className="subscription-container">
                {plans.map((item, index) => (
                    <div key={index} className="subscription_con">
                        <div className="plans-grid">
                            <img src={item.image} alt="" className="bg_plan" />
                 
                            <div className="detail_plan_card">
                                <p>{item.name}</p>
                                <div className="detail_plan_grid">
                                    <div className="detail_plan_content">
                                        <h4>Floor</h4>
                                        <p>{item.floor}</p>
                                    </div>
                                    <div className="detail_plan_content">
                                        <h4>Volume</h4>
                                        <p>{item.volume}</p>
                                    </div>
                                    <div className="detail_plan_content">
                                        <h4>Owners</h4>
                                        <p>{item.owner}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionPlans;

