import React, { useRef } from "react";

import {
  BsInstagram,
  BsArrowRightShort,
  BsArrowLeftShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Gallery.css";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="gallery flex__center">
      <div className="gContent">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="customBtn">
          View More
        </button>
      </div>
      <div className="slide">
        <div className="image-container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="images-card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery images" />
              <BsInstagram className="image-icon" />
            </div>
          ))}
        </div>
        <div className="image-arrow">
          <BsArrowLeftShort
            className="arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
