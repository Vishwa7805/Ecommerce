import header from './Header.module.css';
import img from '../../assets/logo.svg';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Header = ({setShowLogin}) => {

  return (
    <header className={header.navbar}>
      <div className={header.logoContainer}>
        <img src={img} alt="Logo"/>
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
          <CgProfile className={header.profileIcon}/>
          <p>Account</p>
        </div>
      </div>
    </header>
  );
}

export default Header;