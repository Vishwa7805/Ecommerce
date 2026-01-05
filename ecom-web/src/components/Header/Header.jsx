import header from './Header.module.css';
import logo from '../../assets/logo.svg';
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useRef, useEffect } from 'react';
import UserContext from '../Context/UserContext.jsx';
import defaultImg from '../../assets/icon-7797704_640.png';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";


const Header = ({ setShowLogin }) => {

  const { currentUser } = useContext(UserContext);
  const { setCurrentUser } = useContext(UserContext);
  const isSeller = currentUser?.role?.includes('SELLER');
  const [isDropdown, setIsDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])

  const showDropdown = () => {
    setIsDropdown(!isDropdown);
  }

  const handleNavigate = (path) => {
    navigate(path);
    setIsDropdown(false);
  }

  const handleSignOut = () => {
    setCurrentUser(null);
    setIsDropdown(false);
    window.location.href = 'http://localhost:8080/logout';
  }

  return (
    <header className={header.navbar}>
      <div className={header.logoContainer}>
        <img src={logo} alt="Logo" />
      </div>
      <nav className={header.navLinks}>
        <Link to="/" className={header.navElements}>Home</Link>
        <Link to="/shop" className={header.navElements}>Shop</Link>
        <Link to="/about" className={header.navElements}>About Us</Link>
        <Link to="/contact" className={header.navElements}>Contact</Link>
        {isSeller && <Link to="/seller"><button className={header.sellerButton}>Seller Dashboard</button></Link>}
      </nav>
      <div className={header.iconsContainer} onClick={() => { if (!currentUser) setShowLogin(true) }}>
        <div className={header.profileContainer} ref={dropdownRef}>
          {currentUser ? (
            <div style={{ position: 'relative' }}>
              <img src={currentUser.pictureUrl || defaultImg} alt="Profile" className={header.profileImage} onClick={showDropdown} />
              {isDropdown && (
                <ul className={header.dropdownMenu}>
                  <li>
                    <IoMdSettings style={{ fontSize: '1em', color: 'var(--color3)' }} />
                    <p>Manage account</p>
                  </li>
                  <Link to="/cart">
                    <li>
                      <MdOutlineShoppingCart style={{ fontSize: '1em', color: 'var(--color3)' }} />
                      <p>Cart</p>
                    </li></Link>
                  <li>
                    <FaBasketShopping style={{ fontSize: '1em', color: 'var(--color3)' }} />
                    <p>My Orders</p>
                  </li>
                  <li onClick={handleSignOut}>
                    <FaSignOutAlt style={{ fontSize: '1em', color: 'var(--color3)' }} />
                    <p>Sign out</p>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <>
              <CgProfile className={header.profileIcon} />
              <p>Account</p>
            </>
          )
          }
        </div>
      </div>
    </header>
  );
}

export default Header;