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
    lazyLoad: true,
    centerPadding: "1px",
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,

    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div>
      <Slider {...settings} >
        {images.map((image, index) => (
          <div
            key={uuidv4}
            className={` ${
              index === imageIndex ? "sideServices activeSlide" : "sideServices"
            }`}
          >
            {console.log(image)}
            {image ===
            "/src/assets/ps/psv1.mp4" || image === "/src/assets/ps/psv2.mp4" ? (
              console.log(image, "img"),
              <video width="750" style={{ maxHeight: "90vh"}} autoPlay="true" muted="true">
                <source src={image} type="video/mp4" />
              </video>
            ) : (
              <img src={image} alt={image} />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServicesCarousel;
