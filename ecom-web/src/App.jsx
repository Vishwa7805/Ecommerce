import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import Products from './components/Products/Products.jsx';
import BannerEdit from './components/BannerEdit/BannerEdit.jsx';
import AddProduct from './components/AddProduct/AddProduct.jsx';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts.jsx';
import Login from './components/Login/Login.jsx';
import Footer from './components/Footer/Footer.jsx';
import Subscription from './components/Subscription/Subscription.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import SellerWrapper from './components/SellerWrapper/SellerWrapper.jsx';
import { UserProvider } from './components/Context/UserContext.jsx';

function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <UserProvider>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<>
              <Header setShowLogin={setShowLogin} />
              <HeroSection />
              <Products />
              {/* <FeaturedProducts /> */}
              <Subscription />
              <Footer />
            </>} />
            <Route path="/seller" element={
              <SellerWrapper setShowLogin={setShowLogin} />
            } >
              <Route index element={<BannerEdit />} />
              <Route path="add-products" element={<AddProduct />} />
            </Route>
            <Route path="/product-details/:id" element={
              <>
                <Header setShowLogin={setShowLogin} />
                <ProductDetails />
              </>
            } />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  )
}

export default App;