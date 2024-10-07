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
import InputCode from "./pages/InputCode/InputCode";
import SubscriptionPage from "./pages/SubscriptionPage/SubscriptionPage.jsx";
import Account from "./pages/account/account.jsx";
import CreatePage from "./pages/CreatePage/CreatePage.jsx";
import SmartContractForm from "./pages/SmartContractForm/SmartContractForm.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
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
          <Route path="/inputCode" element={<InputCode/>} />
          <Route path="/CollectionCreate" element={<CollectionCreate />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ChangePassword" element={<ChangePassword/>}/>
          <Route path="/NFTCreation" element={<NFTCreation/>}/>
          <Route path="/SmartContractForm" element={<SmartContractForm/>} />
          <Route path="/CreatePage" element={<CreatePage/>} />
          <Route path="/Account" element={<Account/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/Subscription" element={<SubscriptionPage/>} />
          {/* DASHBOARD----------------------------------------------------------- */}
          <Route path="/Dashboard" element={<Dashboard />}>
              <Route path="BinanceChart" element={<BinanceChart />} />
              <Route path="NFTDetail" element={<NFTDetail />} />
              <Route path="CreatePage" element={<CreatePage/>} />
              <Route path="NFTsPage" element={<NFTsPage />} />
              <Route path="PoolTable" element={<PoolTable />} />
              <Route path="AccountDashboard" element={<Account />} />
              <Route path="SwapComponent" element={<SwapComponent />} />
          </Route>
        {/* COLLECTION DETAIL----------------------------------------------------------- */}
        <Route path="/CollectionDetailPage" element={<CollectionDetailPage />}>
          <Route path="overview" element={<OverviewDetailCollection />} />
          <Route path="items" element={<IteamDetailCollection />} />
          <Route path="offers" element={<OffersDetailCollection />} />
          <Route path="analytics" element={<AnalyticsDetailCollection />} />
          <Route path="activity" element={<ActivityDetailCollection />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
