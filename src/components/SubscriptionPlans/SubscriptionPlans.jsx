// import React from 'react';
// import './SubscriptionPlans.css'; 

// const SubscriptionPlans = () => {
//   const plans = [
//     {
//       id: 1,
//       title: 'Gold Subscription',
//       price: '$100.00',
//       frequency: 'Every month',
//       description: 'Get anytime access to our growing collection of classes, workshops, and exclusive content. New items added every month.',
//       image: 'https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2024/08/16/stills-1-1--82--00487784407060607288166-88884556937264690877561.jpg',
//     },
//     {
//       id: 2,
//       title: 'Gold Subscription',
//       price: '$100.00',
//       frequency: 'Every month',
//       description: 'Get anytime access to our growing collection of classes, workshops, and exclusive content. New items added every month.',
//       image: 'https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2024/08/16/stills-1-1--82--00487784407060607288166-88884556937264690877561.jpg',
//     },
//     {
//       id: 3,
//       title: 'Gold Subscription',
//       price: '$100.00',
//       frequency: 'Every month',
//       description: 'Get anytime access to our growing collection of classes, workshops, and exclusive content. New items added every month.',
//       image: 'https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2024/08/16/stills-1-1--82--00487784407060607288166-88884556937264690877561.jpg',
//     },
//        {
//       id: 4,
//       title: 'Gold Subscription',
//       price: '$100.00',
//       frequency: 'Every month',
//       description: 'Get anytime access to our growing collection of classes, workshops, and exclusive content. New items added every month.',
//       image: 'https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2024/08/16/stills-1-1--82--00487784407060607288166-88884556937264690877561.jpg',
//     },
//   ];

//   return (
//     <div className="subscription-container">
//       <h1>Choose your plan</h1>
//       <div className="plans-grid">
//         {plans.map(plan => (
//           <div className="plan-card" key={plan.id}>
//             <img src={plan.image} alt={plan.title} className="plan-image" />
//             <div className="plan-details">
//               <h2>{plan.title}</h2>
//               <h3>{plan.price}</h3>
//               <p>{plan.frequency}</p>
//               <p>{plan.description}</p>
    
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SubscriptionPlans;






import React, { useState } from "react";
import './SubscriptionPlans.css'; 
import { GrPrevious,GrNext } from "react-icons/gr";
import { pl } from "date-fns/locale";


const plans = [
    {
      id: 1,
      name: 'Gold Subscription',
      floor: '0.003',
      volume: '0.006',
      owner: '2',
      image: 'https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416__480.png',
    },
       {
      id: 2,
      name: 'Gold Subscription',
      floor: '0.003',
      volume: '0.006',
      owner: '2',
      image: 'https://th.bing.com/th/id/OIP.NKYu4zE3x81ZgIgOFFvLHgHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain',
    },
       {
      id: 3,
      name: 'Gold Subscription',
      floor: '0.003',
      volume: '0.006',
      owner: '2',
      image: 'https://th.bing.com/th/id/OIP.L7HpfxjWNrcZFGzQdVeXjQHaHa?w=626&h=626&rs=1&pid=ImgDetMain',
    },
       {
      id: 4,
      name: 'Gold Subscription',
      floor: '0.003',
      volume: '0.006',
      owner: '2',
      image: 'https://th.bing.com/th/id/OIP.lRmyoy5BMt5VD1V40kSGLQHaKX?rs=1&pid=ImgDetMain',
    },
     {
      id: 5,
      name: 'Gold Subscription',
      floor: '0.003',
      volume: '0.006',
      owner: '2',
      image: 'https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2024/08/16/stills-1-1--82--00487784407060607288166-88884556937264690877561.jpg',
    },
       {
      id: 6,
      name: 'Gold Subscription',
      floor: '0.003',
      volume: '0.006',
      owner: '2',
      image: 'https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2024/08/16/stills-1-1--82--00487784407060607288166-88884556937264690877561.jpg',
    },
       {
      id: 7,
      name: 'Gold Subscription',
      floor: '0.003',
      volume: '0.006',
      owner: '2',
      image: 'https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2024/08/16/stills-1-1--82--00487784407060607288166-88884556937264690877561.jpg',
    },
       {
      id: 8,
      name: 'Gold Subscription',
      floor: '0.003',
      volume: '0.006',
      owner: '2',
      image: 'https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2024/08/16/stills-1-1--82--00487784407060607288166-88884556937264690877561.jpg',
    },
  ];
  const SubscriptionPlans = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
  const numVisibleCards = 4;

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0
        ? Math.max(plans.length - numVisibleCards, 0)
        : currentIndex - 1; // Move by one card
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex + numVisibleCards >= plans.length
        ? Math.max(plans.length - numVisibleCards, 0)
        : currentIndex + 1; // Move by one card
    setCurrentIndex(newIndex);
  };

  return (
  <div className="subsubscription_parent">
     <p className='title_sub'>HOT COLLECTIONS</p>
      <div className="subscription_slider">
        <div className="pre_sub" onClick={prevSlide}>
          <GrPrevious className='icon_sub' />
        </div>

      <div className="subscription-container" style={{
            transform: `translateX(-${(currentIndex / numVisibleCards) * 100}%)`,
          }}
        >
          {plans.map((item, index) => (
        <div  key={index} className="subscription_con">
          <div className="plans-grid">
              <img src={item.image} alt="" className="bg_plan" />
              <img src={item.image} className='avatar_sub' alt=""/>
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
      <div className="next_sub" onClick={nextSlide} >
        <GrNext className='icon_sub'/>
      </div>
      </div> 
    </div>
  )
};

export default SubscriptionPlans;
