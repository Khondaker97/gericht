import React from 'react';
import  SubHeading  from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => {
  return (
  <div className='newsletter'>
    <div className="heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <p className="opensans">And never miss latest Updates!</p>
    </div>
    <div className="news-input flex__center">
      <input type="email" name="" id="" placeholder='Enter email...' />
      <button className='customBtn'>Subscribe </button>
    </div>
  </div>
);
}
export default Newsletter;
