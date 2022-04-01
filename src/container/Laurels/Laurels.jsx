import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';

import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle }}) =>(

  <div className="awards-card">
    <img src={imgUrl} alt="award" />
    <div className="card-content">
      <p className="cormorant" style={{color: '#DCCA87'}}>{title}</p>
      <p className="cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  
  return (
  <div className='app__bg app__wrapper section__padding' id="awards">
    <div className="app__wrapper_info">
      <SubHeading title= "Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="laurels-awards">
        {data.awards.map(award => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>
    <div className="app__wrapper_img" >
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);
}
export default Laurels;
