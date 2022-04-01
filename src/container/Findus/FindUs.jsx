import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_info">
      <SubHeading title="Contact"/>
      <h1 className="headtext__cormorant" style={{ marginBottom: "2rem"}}>Find Us</h1>
      <div className="content">
        <p className="opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className="cormorant" style={{ color: '#DCCA87', margin: '2rem 0'}}>Opening Hours</p>
        <p className="opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        <button className="customBtn" style={{marginTop: "2rem"}}>View More</button>
      </div>
    </div>
    <div className="app__wrapper_img" style={{marginTop: '2rem'}}>
      <img src={images.findus} alt="Find Us" />
    </div>
  </div>
);

export default FindUs;
 