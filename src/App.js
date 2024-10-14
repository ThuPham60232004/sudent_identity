import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import SubscriptionPage from "./pages/SubscriptionPage/SubscriptionPage.jsx";
import Account from "./pages/account/account.jsx";
import CreatePage from "./pages/CreatePage/CreatePage.jsx";
import SmartContractForm from "./pages/SmartContractForm/SmartContractForm.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import HomeDashboard from "./components/DashboardComponent/HomeDashboard/HomeDashboard.jsx";
import BinanceChart from "./components/DashboardComponent/BinanceChart/BinanceChart.jsx";
import SwapComponent from "./components/DashboardComponent/SwapComponent/SwapComponent.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import PoolTable from "./components/DashboardComponent/PoolTable/PoolTable.jsx";
import NFTCreation from "./pages/NFTCreation/NFTCreation.jsx";
import NFTsPage from "./components/DashboardComponent/NFTs/NFTs.jsx";
import NFTDetail from "./components/DashboardComponent/NFTDetail/NFTDetail.jsx";
import ChangePassword from "./pages/ChangePassword/ChangePassword.jsx"
import TemplateResetpass from "./pages/TemplateEmail/TemplateResetpass.jsx";
import TemplateTransferNFT from "./pages/TemplateEmail/TemplateTransferNFT.jsx";
import ActivityDetailCollection from "./components/CollectionDetailComponents/ActivityDetailCollection/ActivityDetailCollection.jsx";
import AnalyticsDetailCollection from "./components/CollectionDetailComponents/AnalyticsDetailCollection/AnalyticsDetailCollection.jsx";
import IteamDetailCollection from "./components/CollectionDetailComponents/IteamDetailCollection/IteamDetailCollection.jsx";
import OffersDetailCollection from "./components/CollectionDetailComponents/OffersDetailCollection/OffersDetailCollection.jsx";
import OverviewDetailCollection from "./components/CollectionDetailComponents/OverviewDetailCollection/OverviewDetailCollection.jsx";
import CollectionDetailPage from "./pages/CollectionDetailPage/CollectionDetailPage.jsx";
import CollectionCreate from "./pages/CollectionCreate/CollectionCreate.jsx"
import Profile from "./pages/Profile/Profile.jsx"
import ActiveListings from "./components/ProfileComponents/ActiveListings/ActiveListings.jsx";
import ActivityProfile from "./components/ProfileComponents/ActivityProfile/ActivityProfile.jsx";
import Collected from "./components/ProfileComponents/Collected/Collected.jsx";
import Deal from "./components/ProfileComponents/Deal/Deal.jsx";
import Favorited from "./components/ProfileComponents/Favorited/Favorited.jsx";
import Hiddens from"./components/ProfileComponents/Hiddens/Hiddens.jsx";
import InactiveListings from "./components/ProfileComponents/InactiveListings/InactiveListings.jsx";
import OfferMade from "./components/ProfileComponents/OfferMade/OfferMade.jsx";
import OffersReceived from "./components/ProfileComponents/OffersReceived/OffersReceived.jsx";
import Created from"./components/ProfileComponents/Created/Created.jsx"
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail.jsx";
import ServiceD from "./components/ServiceD/ServiceD.jsx";
import ERC721Info from "./pages/ERC721Info/ERC721Info.jsx";
import ERC1155 from "./pages/ERC1155/ERC1155.jsx";
import BEPERC20 from "./pages/BEPERC20/BEPERC20.jsx";
import AllCollection from "./pages/AllCollection/AllCollection.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          {/* Template----------------------------------------------------------- */}
         <Route path="/TemplateResetpass" element={<TemplateResetpass/>}/>
         <Route path="/TemplateTransferNFT" element={<TemplateTransferNFT/>}/>
          {/* GENERAL----------------------------------------------------------- */}
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword/>} />
          <Route path="/CollectionCreate" element={<CollectionCreate />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ChangePassword" element={<ChangePassword/>}/>
          <Route path="/NFTCreation" element={<NFTCreation/>}/>
          <Route path="/SmartContractForm" element={<SmartContractForm/>} />
          <Route path="/CreatePage" element={<CreatePage/>} />
          <Route path="/Account" element={<Account/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/Subscription" element={<SubscriptionPage/>} />
          <Route path="/ServiceDetail" element={<ServiceDetail/>} />
          <Route path="/service/:id" element={<ServiceD/>} />
        {/* DASHBOARD----------------------------------------------------------- */}
          <Route path="/Dashboard" element={<Dashboard />}>
              <Route path="HomeDashboard" element={<HomeDashboard />} />
              <Route path="BinanceChart" element={<BinanceChart />} />
              <Route path="NFTDetail" element={<NFTDetail />} />
              <Route path="CreatePage" element={<CreatePage/>} />
              <Route path="NFTsPage" element={<NFTsPage />} />
              <Route path="PoolTable" element={<PoolTable />} />
              <Route path="SwapComponent" element={<SwapComponent />} />
              {/* PROFILE DETAIL----------------------------------------------------------- */}
              <Route path="Profile" element={<Profile />}>
                <Route path="ActiveListings" element={<ActiveListings />} />
                <Route path="ActivityProfile" element={<ActivityProfile />} />
                <Route path="Collected" element={<Collected />} />
                <Route path="Deal" element={<Deal />} />
                <Route path="Favorited" element={<Favorited />} />
                <Route path="Hiddens" element={<Hiddens />} />
                <Route path="InactiveListings" element={<InactiveListings />} />
                <Route path="OfferMade" element={<OfferMade />} />
                <Route path="OffersReceived" element={<OffersReceived />} />
                <Route path="Hiddens" element={<Hiddens />} />
                <Route path="Created" element={<Created />} />
              </Route>
          </Route>
        {/* COLLECTION DETAIL----------------------------------------------------------- */}
        <Route path="/CollectionDetailPage" element={<CollectionDetailPage />}>
          <Route path="overview" element={<OverviewDetailCollection />} />
          <Route path="items" element={<IteamDetailCollection />} />
          <Route path="offers" element={<OffersDetailCollection />} />
          <Route path="analytics" element={<AnalyticsDetailCollection />} />
          <Route path="activity" element={<ActivityDetailCollection />} />
          </Route>

          <Route path="/ERC721Info" element={<ERC721Info />} />
          <Route path="/ERC1155" element={<ERC1155 />} />
          <Route path="/BEPERC20" element={<BEPERC20 />} />
          <Route path="/AllCollection" element={<AllCollection />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
