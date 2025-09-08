import header from './Header.module.css';
import logo from '../../assets/logo.svg';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../Context/UserContext.jsx';
import defaultImg from '../../assets/apple_earphone_image.png';

const Header = ({ setShowLogin }) => {

  const { currentUser } = useContext(UserContext);

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
        <Link to="/seller"><button className={header.sellerButton}>Seller Dashboard</button></Link>
      </nav>
      <div className={header.iconsContainer} onClick={() => setShowLogin(true)}>
        <div className={header.profileContainer}>
          {
            (currentUser && <img src={currentUser.pictureUrl || defaultImg} alt="Profile" className={header.profileImage} />)
            || (
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