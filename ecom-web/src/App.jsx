import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import Products from './components/Products/products.jsx';
import SellerDashboard from './components/SellerDashboard/SellerDashboard.jsx';
import BannerEdit from './components/BannerEdit/BannerEdit.jsx';
import AddProduct from './components/AddProduct/AddProduct.jsx';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts.jsx';
import Login from './components/Login/Login.jsx';
import Footer from './components/Footer/Footer.jsx';

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
              <Footer/ >
            </>} />
            <Route path="/seller" element={<SellerDashboard />} >
              <Route index element={<BannerEdit />} />
              <Route path="add-products" element={<AddProduct />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
