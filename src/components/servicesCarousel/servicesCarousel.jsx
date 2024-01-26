import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";

const ServicesCarousel = ({ imagesProps }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(imagesProps.image);
  }, [imagesProps]);

  const settings = {
    className: "single",
    infinite: true,
    centerPadding: "1px",
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,

    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={uuidv4}
            className={` ${
              index === imageIndex ? "sideServices activeSlide" : "sideServices"
            }`}
          >
            <img src={image} alt={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServicesCarousel;
