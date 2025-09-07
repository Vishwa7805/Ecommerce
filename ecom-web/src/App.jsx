import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import Products from './components/Products/Products.jsx';
import SellerDashboard from './components/SellerDashboard/SellerDashboard.jsx';
import BannerEdit from './components/BannerEdit/BannerEdit.jsx';
import AddProduct from './components/AddProduct/AddProduct.jsx';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts.jsx';
import Login from './components/Login/Login.jsx';
import Footer from './components/Footer/Footer.jsx';
import Subscription from './components/Subscription/Subscription.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';

function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<>
              <Header setShowLogin={setShowLogin} />
              <HeroSection />
              <Products />
              <FeaturedProducts />
              <Subscription />
              <Footer />
            </>} />
            <Route path="/seller" element={
              <>
                <Header setShowLogin={setShowLogin}/>
                <SellerDashboard />
              </>
            } >
              <Route index element={<BannerEdit />} />
              <Route path="add-products" element={<AddProduct />} />
            </Route>
            <Route path="/product-details/:id" element={
              <>
                <Header setShowLogin={setShowLogin}/>
                <ProductDetails />
              </>
            } />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
