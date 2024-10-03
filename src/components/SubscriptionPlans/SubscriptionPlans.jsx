import React, { useContext } from 'react';
import { ItemContext } from "../../context/ItemContext";
import { useNavigate } from 'react-router-dom';
import './SubscriptionPlans.css'; 

const SubscriptionPlans = () => {
    const {setItem}=useContext(ItemContext);
    const navigate=useNavigate();
    const handleClick=(item)=>{
    setItem(item);
    navigate("/CollectionDetailPage",{state:{item}});
}
const plans = 
[
    {
        rank: 1,
        name: "Courtyard.io",
        floorPrice: "0.004 ETH",
        volume: "15.1 ETH",
        item : "8",
        imageUrl: "https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631",
      },
      {
        rank: 2,
        name: "KIP Protocol Genesis Pass",
        floorPrice: "0.05 ETH",
        volume: "4.5 ETH",
         item : "8",
        imageUrl: "https://coinstats.app/blog/wp-content/uploads/2023/06/The-Rise-of-NFTs-How-Will-AI-Impact-the-NFT-Art-Ecosystem-copy-1-1200x675.webp", 
      },
      {
        rank: 3,
        name: "Pepels",
        floorPrice: "0.09 ETH",
        volume: "4.3 ETH",
         item : "9",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXny2o2hbmXC-MOmVaZsCPvfLEZOMvzgcP6rxEjIyxNEMDdNfuPwpmWZiDR9Mvmj7u_oM&usqp=CAU", 
      },
      {
        rank: 4,
        name: "egg",
        floorPrice: "0.14 ETH",
        volume: "6 ETH",
         item : "1",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1358/1*aN5K9yD54q6XvJJEW8_Q7A.jpeg", 
      },
        {
        rank: 6,
        name: "DeGods",
        floorPrice: "2.24 ETH",
        volume: "73.8 ETH",
         item : "10",
        imageUrl: "https://img.lovepik.com/png/20231105/Cute-cartoon-characters-cute-avatar-expressions-avatar-set_497508_wh860.png", 
      },
       {
        rank: 7,
        name: "Courtyard.io",
        floorPrice: "0.004 ETH",
        volume: "15.1 ETH",
        item : "8",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTim5udFUI8FlOcUmmDPsXmEK0AhMxWTu_EHA&s",
      },
      {
        rank: 8,
        name: "KIP Protocol Genesis Pass",
        floorPrice: "0.05 ETH",
        volume: "4.5 ETH",
         item : "8",
        imageUrl: "https://img.lovepik.com/original_origin_pic/18/07/25/8971387aa7efb981140343063196441d.png_wh860.png", 
      },
      {
        rank: 9,
        name: "Pepels",
        floorPrice: "0.09 ETH",
        volume: "4.3 ETH",
         item : "9",
        imageUrl: "https://img.lovepik.com/png/20231012/Cartoon-cute-character-japanese-student-japanese-characters-ancient-costumes-creative_183321_wh860.png", 
      },
      {
        rank: 10,
        name: "egg",
        floorPrice: "0.14 ETH",
        volume: "6 ETH",
         item : "1",
        imageUrl: "https://png.pngtree.com/png-clipart/20190618/original/pngtree-cute-q-version-cartoon-character-image-q-version-cartoon-character-cute-png-image_3946095.jpg", 
      },
      {
        rank: 11,
        name: "DeGods",
        floorPrice: "2.24 ETH",
        volume: "73.8 ETH",
         item : "10",
        imageUrl: "https://img.lovepik.com/png/20231105/Cute-cartoon-characters-cute-avatar-expressions-avatar-set_497508_wh860.png", 
      },
        {
        rank: 12,
        name: "DeGods",
        floorPrice: "2.24 ETH",
        volume: "73.8 ETH",
         item : "10",
        imageUrl: "https://img.lovepik.com/png/20231105/Cute-cartoon-characters-cute-avatar-expressions-avatar-set_497508_wh860.png", 
      }
];



    return (
        <div className="subsubscription_parent">
            <p className='title_sub'>HOT COLLECTIONS</p>
            <div className="subscription-container">
                {plans.map((item, index) => (
                    <div key={index} className="subscription_con" onClick={()=>handleClick(item)}>
                        <div className="plans-grid">
                            <img src={item.imageUrl} alt="" className="bg_plan" />
                            <div className="detail_plan_card">
                                <p>{item.name}</p>
                                <div className="detail_plan_grid">
                                    <div className="detail_plan_content">
                                        <h4>Floor</h4>
                                        <p>{item.floorPrice}</p>
                                    </div>
                                    <div className="detail_plan_content">
                                        <h4>Volume</h4>
                                        <p>{item.volume}</p>
                                    </div>
                                    <div className="detail_plan_content">
                                        <h4>Owners</h4>
                                        <p>{item.item}</p>
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

