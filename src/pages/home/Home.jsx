import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.jsx";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import BrandInfo from "../../components/BrandInfo/BrandInfo";
import SubscriptionPlans from "../../components/SubscriptionPlans/SubscriptionPlans";
import Services from "../../components/Services/Services";
import TrendingList from "../../components/TrendingList/TrendingList.jsx";
import CardSlider from "../../components/CardSlider/CardSlider.jsx";
import LogoCarousel from "../../components/LogoCarousel/LogoCarousel.jsx";
import NFTGallery from "../../components/NFTGallery/NFTGallery.jsx";
import ContactUs from "../ContactUs/ContactUs.jsx";
import ERC_Contract from "../ERC_Contract/ERC_Contract.jsx";
import Advertisement from "../../components/Advertisement/Advertisement.jsx";
import LogoCompany from "../../components/LogoCompany/LogoCompany.jsx";
import GuideNFT from "../../components/Guide/Guide.jsx";
import Introduce from "../../components/Introduce/Introduce.jsx";
import Connective from "../../components/Connective/Connective.jsx";
const Home = () => {
  return (

    <div className="home_page">
      <div className="navbar_home_page">
         <Navbar />
      </div>
    
    <div className="body_home_page">
        <div className="header_home_page">
         <Header/>
      </div>
         <div className="trendinglist_home_page">
        <TrendingList/>
      </div>
{/* 
     <div className="NFTGallery_home_page">
       <NFTGallery/>  
      </div> */}
        
      <div className="SubscriptionPlans_home_page">
        <SubscriptionPlans/>
      </div>
      <div className="ERC_Contract_home_page">
         <ERC_Contract/>
      </div>
   
      <div className="Advertisement_home_page">
        <Advertisement/>
      </div>      
     <div className="LogoCompany_home_page">
         <LogoCompany/>
      </div>
      <div className="LogoCarousel_home_page">
        <LogoCarousel/>
      </div> 
      <div className="Services_home_page">
         <Services/>
      </div>
     <div className="GuideNFT_home_page">
         <GuideNFT/>
      </div>
      <div className="Introduce_home_page">
         <Introduce/>
      </div> 
       <Connective/>
      </div> 
        <br/><br/><br/><br/>
      <div className="footer_home_page">
        <Footer/>
      </div>
  </div>

  );
};

export default Home;
