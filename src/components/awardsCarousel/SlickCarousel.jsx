import React, { useState } from "react";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import {
  d12020,
  d22020,
  d32020,
  d12021,
  d22021,
  d32021,
  d42021,
  d12022,
  d22022,
  d32022,
  d42022,
  d12023,
  d22023,
  d32023,
} from "../../assets";

const SlickCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      lazyLoad:true,
      centerPadding: "0px",
      slidesToShow: 3,
      speed: 700,
      beforeChange: (current, next) => setImageIndex(next)
    };

    const images = [
      {
        key: uuidv4(),
        content: d12020,
      },
      {
        key: uuidv4(),
        content: d22020,
      },
      {
        key: uuidv4(),
        content: d32020,
      },
      {
        key: uuidv4(),
        content: d12021,
      },
      {
        key: uuidv4(),
        content: d22021,
      },
      {
        key: uuidv4(),
        content: d32021,
      },
      {
        key: uuidv4(),
        content: d42021,
      },
      {
        key: uuidv4(),
        content: d12022,
      },
      {
        key: uuidv4(),
        content: d22022,
      },
      {
        key: uuidv4(),
        content: d32022,
      },
      {
        key: uuidv4(),
        content: d42022,
      },
      {
        key: uuidv4(),
        content: d12023,
      },
      {
        key: uuidv4(),
        content: d22023,
      },
      {
        key: uuidv4(),
        content: d32023,
      },
    ];
    return (
      <div>
        <Slider {...settings} className="w-full h-full">
          {images.map(({key, content}, index) => (
            <div key={key} className={` ${index === imageIndex ? "slide activeSlide" : "slide"}`}>
              {console.log(index,imageIndex)}
              <img src={content} alt={content} />
            </div>
          ))}
        </Slider>
      </div>
    );
 
}

export default SlickCarousel