import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => {
  return (
    <div className="header app__wrapper" id="Home">
      <div className="wrapper-info">
        <SubHeading title="Chase the new Flavour" />
        <h1 className="header-h1">The Key to Fine Dining</h1>
        <p className="opensans p-text" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus.{" "}
        </p>
        <button type="button" className="customBtn">
          Explore Menu
        </button>
      </div>
      <div className="wrapper-img">
        <img src={images.welcome} alt="welcome treat" />
      </div>
    </div>
  );
};
export default Header;
