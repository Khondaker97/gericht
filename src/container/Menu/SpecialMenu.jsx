import React from 'react';

import { MenuItem, SubHeading} from '../../components';
import{ images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  return (
  <div className='specialMenu flex__center section__padding' id="menu">
    <div className="specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="main-menu">
      <div className="wine flex__center">
        <p className='menu-heading'>Wine & Beer</p>
        <div className="menu-items"> 
          {data.wines.map((wine, index)=> (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>

      <div className="menu-img">
        <img src={images.menu} alt="menu" />
      </div>

      <div className="cocktails flex__center">
        <p className='menu-heading'>Cocktails</p>
        <div className="menu-items"> 
          {data.cocktails.map((cocktail, index)=> (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>
      
    </div>

    <div style={{marginTop: '15px'}}>
      <button type="button" className='customBtn' >View More</button>
    </div>
  </div>
);
}
export default SpecialMenu;
