import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);


  
  return (
  <nav className="navbar">
    <div className="navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className="navbar-links">
      <li className="opensans"><a href="#Home">Home</a></li>
      <li className="opensans"><a href="#About">About</a></li>
      <li className="opensans"><a href="#Menu">Menu</a></li>
      <li className="opensans"><a href="#Award">Award</a></li>
      <li className="opensans"><a href="#Contact">Contact</a></li>
    </ul>
    <div className='navbar-login'>
      <a href="#login" className='opensans'>Log In / Registration</a>
      <div></div>
      <a href="/" className='opensans'>Book Table</a>
    </div>
    <div className="navbar-smScreen">
      <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => setToggleMenu(true)} />

      { toggleMenu && (

        <div className="navbar-smScreen_overlay flex_center slide_bottom">
          <MdOutlineRestaurantMenu fontsize={27} className="overlay-close" onClick={()=> setToggleMenu(false)} />
          <ul className="navbar-smlinks">
            <li className="opensans"><a href="#Home">Home</a></li>
            <li className="opensans"><a href="#About">About</a></li>
            <li className="opensans"><a href="#Menu">Menu</a></li>
            <li className="opensans"><a href="#Award">Award</a></li>
            <li className="opensans"><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  </nav>
);
}
export default Navbar;
