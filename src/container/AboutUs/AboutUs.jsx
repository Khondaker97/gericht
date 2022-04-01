import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="aboutUs app__bg flex__center" id="About">
      <div className="about-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>

      <div className="about-content flex__center">
        <div className="contentAbout">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about-spoon" className="spoon__img" />
          <p className="opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="customBtn">
            Know More
          </button>
        </div>

        <div className="knife flex__center">
          <img src={images.knife} alt="about knife" />
        </div>

        <div className="contentHistory">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about-spoon" className="spoon__img" />
          <p className="opensans">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button type="button" className="customBtn">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
