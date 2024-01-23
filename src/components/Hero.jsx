import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { bgph1, bgph2 } from "../assets";
import styles from "../style";


const Hero = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const backgroundImages = [bgph1, bgph2];

  useEffect(() => {
    const changeBackgroundImage = () => {
      setBackgroundImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    };

    const intervalId = setInterval(changeBackgroundImage, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const transitionStyle = {
    transition: "background-image 2s ease-in-out",
  };

  return (
    <section
      className={`w-screen h-screen relative flex justify-center`}
      style={{
        backgroundImage: `url(${backgroundImages[backgroundImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...transitionStyle,
      }}
    >
      <div className={`${styles.opacity} bg-black`} style={{ zIndex: 0 }}></div>
      {/*  Hero content */}
      <div className={`${styles.boxWidth} relative`}>
        <div
          className={`absolute top-1/2 left-8 transform -translate-y-1/2 z-10 text-white`}
        >
          <div className={`flex flex-col w-fit mr-10`}>
            <h1
              className={`text-4xl md:text-4xl font-bold mb-4 text-primary font-bebas`}
            >
              Bun venit la{" "}
              <span className={`text-white border-t-2 border-l-2 pl-2`}>
                TODERICA
              </span>{" "}
              <span className="text-primary">SOLUTIONS</span>
            </h1>
            <div
              className={`xxs:text-[42px] xs:text-[50px] ss:text-[60px] sm:text-[90px] md:text-[100px] font-[600] mb-4 font-bebas max-w-4xl`}
            >
              Servicii de constructie, renovare si proiectare
            </div>
            <div className={`flex mr-20 max-w-4xl`}>
              <p
                className={`${styles.paragraph} text-base font-normal font-roboto text-white`}
              >
                Calitate și inovație, fundamentul nostru solid.
              </p>
            </div>
          </div>
          <Link to="/about">
          <button className={`${styles.btn}  mt-12`}>Mai multe ➨</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
