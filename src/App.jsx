import StockDetailsPage from './components/StockDetailsPage';
import AddStockPage from "./components/AddStockPage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import SetAlertsPage from "./components/SetAlertsPage";
import ViewPortfolioPage from "./components/ViewPortfolioPage";
// import DashboardPage from "./components/DashboardPage";
import AlertManagementPage from './components/AlertManagementPage';
import CompanyProfilesPage from './components/CompanyProfilesPage';
import MarketUpdatesPage from './components/MarketUpdatesPage';
import PortfolioManagementPage from './components/PortfolioManagementPage';
import TransactionHistoryPage from './components/TransactionHistoryPage';
import UserProfilePage from './components/UserProfilePage';
import HelpFAQPage from "./components/HelpFAQPage";
import AboutUsPage from "./components/AboutUsPage";
import TermsOfServicePage from "./components/TermsOfServicePage";
const App = () => {
  return (
    <>
    <ViewPortfolioPage/>
    <SetAlertsPage/>
    <AddStockPage/>
    <HomePage /> 
    <StockDetailsPage/>
    <TermsOfServicePage/>
    <AboutUsPage/>
    <HelpFAQPage/>
    <RegisterPage /> 
    <LoginPage /> 
    <UserProfilePage/>
    <MarketUpdatesPage/>
    <CompanyProfilesPage/>
    <AlertManagementPage/>
    <TransactionHistoryPage/>
    <PortfolioManagementPage/>
    {/* 
    <DashboardPage />
       */}
    </>
  );
};

export default App;
