import React from "react";
import "./SubscriptionPage.css";
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { HiBadgeCheck } from "react-icons/hi";
import { SiHiveBlockchain } from "react-icons/si";
import { GrVolumeControl } from "react-icons/gr";
import { FaLaptopCode } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaStopwatch } from "react-icons/fa";

const SubscriptionPage = () => {
   const subscriptionArray = [
        {
        plan: "STARTER",
        price: "$5/Month",
        popular: "",
        service: ["Automated Reporting", "Faster Processing", "Customization"],
        info: "Literally, you probably haven't heard of them jean short."
        },
        {
            plan: "STARTER",
            price: "$5/Month",
            popular: "",
            service: ["Automated Reporting", "Faster Processing", "Customization"],
            info: "Literally, you probably haven't heard of them jean short."
        },
        {
            plan: "STARTER",
            price: "$5/Month",
            popular: "",
            service: ["Automated Reporting", "Faster Processing", "Customization"],
            info: "Literally, you probably haven't heard of them jean short."
        },
        {
            plan: "STARTER",
            price: "$5/Month",
            popular: "",
            service: ["Automated Reporting", "Faster Processing", "Customization"],
            info: "Literally, you probably haven't heard of them jean short."
        },
        {
            plan: "STARTER",
            price: "$5/Month",
            popular: "",
            service: ["Automated Reporting", "Faster Processing", "Customization"],
            info: "Literally, you probably haven't heard of them jean short."
        },
         {
            plan: "STARTER",
            price: "$5/Month",
            popular: "",
            service: ["Automated Reporting", "Faster Processing", "Customization"],
            info: "Literally, you probably haven't heard of them jean short."
        }
    ];


    const featuresData = [
    {
        id: 1,
        icon: <FaStopwatch />,
        title: "High-performing, secured Plugin",
        content: "Unlike many plugins that come and go, the framework stood the test of time. Over the months, it grew to become one of the fastest and most secure plugins in the market."
    },
    {
        id: 2,
        icon: <RiSecurePaymentFill />,
        title: "Secure integrations",
        content: "As you grow, you may want to expand your store with new functionalities. Thanks to Solidity flexibility, it’s easy to add new integrations and customize the store even once it's already developed.",
    },
    {
        id: 3,
        icon: <FaLaptopCode />,
        title: "Stable codebase",
        content: "Smart NFT is a stable provides a stable code from v2.1 and with upgradable smart contracts to get the best experience without losing any nfts created past."
    },
    {
        id: 4,
        icon: <SiHiveBlockchain />,
        title: "Blockchain reliability",
        content: "Universal, reliable and versatile infrastructure will suit any type of EVM-based smart contracts and it will benefit with 99.99% uptime."
    },
    {
        id: 5,
        icon: <GrVolumeControl />,
        title: "Simple control panel",
        content: "Flexible style settings all layouts and numbers on all nft, collections, categories pages control from admin dashboard."
    },
    {
        id: 6,
        icon: <FaQrcode />,
        title: "Constant data consistency",
        content: "With the lowest possible delay, our blockchain saves and transfers 100% of transactions. We ensure that each customer will get 100% blockchain data consistency in less than a second."
    }
];


    return (
        <div className="Subscription_page">
            <Navbar/>

       
            <div className="subscription_container">
                 <h2>Subscription</h2>
                <div className="subscription_about">
                    <div className="left_subscription_about">
                        <h4>ANY CONTRACT ANY CHAIN</h4>
                        <h3>Deploy on any EVM compatible chain</h3>
                        <p>Its simple, easy, secured to deploy smart contracts on any EVM compatible chains you want. The Marketplace contract will manage market functionality whereas ERC-721, ERC-1155 contracts will manage minting of NFTs.</p>
                        <div className="detail_left_subscription_about_group">
                            <div className="detail_left_subscription_about_con">
                            <HiBadgeCheck className="icon_detail_left_subscription_about_con"/>
                            <p>700+ support of all EVM Chains with the fastest RPC</p>
                            </div>
                            <div className="detail_left_subscription_about_con1">
                                <HiBadgeCheck className="icon_detail_left_subscription_about_con"/>
                                <p>Add any EMV chains except the built-in chains.</p>
                            </div>
                            <div className="detail_left_subscription_about_con">
                                <HiBadgeCheck className="icon_detail_left_subscription_about_con"/>
                                <p>Manage deployed smart contracts.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="right_subscription_about">
                        <img src="https://wpsmartnft.com/wp-content/uploads/2023/06/snft-3.png" alt="" />
                    </div>
                </div>

           <div className="Subscription_container">
      <div className="Subscription_box">
        <div className="Subscription_box_info">
          <div className="logo_Subscription_box_info">
            <h2>FINTECH</h2>
          </div>
          <div className="des_Subscription_box_info">
            <p>
              Meet the PUNKS! Everyone’s favorite misfit crew of collectors, rebels,
              and crypto degens from the metaverse. A project by Pixel Vault.
            </p>
          </div>
        </div>

        <div className="Subscription_box_group">
          {subscriptionArray.map((sub, index) => (
            <div key={index} className="Subscription_box_box">
                <h3>{sub.plan}</h3>
              <div className="Subscription_box_card">
                <h2>{sub.price}</h2>
                <ul>
                  {sub.service.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                  <p>{sub.info}</p>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
                


               <div className="powerful_feature_box">
            <h2>Powerful features</h2>
            <h4>We provide NFT marketplace services that enable users to establish a feature-rich NFT marketplace on several blockchain networks like Ethereum, BNB, Polygon, Avalanche, Tezos, and others.</h4>

            <div className="powerful_feature_box_con">
                {featuresData.map((feature) => (
                    <div key={feature.id} className="powerful_feature_card">
                        <div className="icon_feature">
                            {feature.icon}
                        </div>
                        <h3>{feature.title}</h3>
                        <p className="content_feature_powerful_Card">{feature.content}</p>
                    </div>
                ))}
            </div>
        </div>
            </div>
            
            <Footer/>
        </div>
    )
};

export default SubscriptionPage;
