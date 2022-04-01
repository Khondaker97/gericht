import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import images from '../../constants/images';

import './Footer.css';

const Footer = () => {
  return (
  <div className='footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="footer-links">
      <div className="links-contact">
        <h1 className="headtext">Contact Us</h1>
        <p className="opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="opensans">+1 212-344-1230</p>
        <p className="opensans">+1 212-555-1230</p>
      </div>
      <div className="links-logo">
        <img src={images.gericht} alt="footer-logo" />
        <p className="opensans">"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt="spoon" />
        <div className="icon">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="links-work">
        <h1 className="headtext">Working Hours</h1>
        <p className="opensans">Monday-Friday:</p>
        <p className="opensans">08:00 am -12:00 am</p>
        <p className="opensans">Saturday-Sunday:</p>
        <p className="opensans">07:00am -11:00 pm</p>
      </div>
    </div>
    <div className="copyright">
      <p className="opensans">2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);
}
export default Footer;
