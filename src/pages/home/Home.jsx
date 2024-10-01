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
import WalletLogin from "../../components/WalletLogin/WalletLogin.jsx";
import LogoCarousel from "../../components/LogoCarousel/LogoCarousel.jsx";
import Service1 from "../../components/Service1/Service.jsx";
import NFTGallery from "../../components/NFTGallery/NFTGallery.jsx";
import ContactUs from "../ContactUs/ContactUs.jsx";
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
     {/* <div className="cardslide_home_page">
       <CardSlider/>  
      </div>
        
      <div className="featuredproducts_home_page">

    <div>
      <CardSlider/>
      <FeaturedProducts/>
      </div>
      <div className="walletlogin_home_page">
         <WalletLogin/>
      </div>
      <div className="logocarousel_home_page">
        <LogoCarousel/>
      </div>
      <div className="services_home_page">
         <Services/>
      </div>
   
      <div className="nftgallrery_home_page">
        <NFTGallery/>
      </div>
      <div className="service1_home_page">
         <Service1/>
      </div>
      <div className="brandinfo_home_page">
         <BrandInfo/>
      </div>
      <div className="subscriptionplans_home_page">
       <SubscriptionPlans/>
      </div>

      <div className="maillist_home_page">
        <MailList/>
      </div> */}
      <div className="footer_home_page">

        <Footer/>
      </div>
  </div>
    </div>
  );
};

export default Home;
