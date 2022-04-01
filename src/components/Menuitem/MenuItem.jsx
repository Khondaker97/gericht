import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price , tags}) => {
  return (
  <div className='menu-item'>
    <div className="item-head">
      <div className="item-name">
        <p className="cormorant" style={{ color: '#DCCA87'}}>{title}</p>
      </div>
      <div className='item-dash'/>
      <div className="item-price">
        <p className="cormorant" >{price}</p>
      </div>
    </div>

    <div className="item-sub">
      <p className="opensans" style={{color: '#AAA'}}>{tags}</p>
    </div>
  </div>
);
}
export default MenuItem;
