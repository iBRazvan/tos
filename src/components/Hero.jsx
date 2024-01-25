import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { bgph1, bgph2 } from "../assets";
import styles from "../style";

const Hero = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const backgroundImages = [bgph1, bgph2];

  const scrollControls = useAnimation();

  useEffect(() => {
    const changeBackgroundImage = () => {
      setBackgroundImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const intervalId = setInterval(changeBackgroundImage, 10000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Define the threshold for triggering the animation
    const threshold = 50;

    // Update opacity based on scroll position
    const updateOpacity = () => {
      if (scrollY > threshold) {
        scrollControls.start({ opacity: 1 });
      } else {
        scrollControls.start({ opacity: 0 });
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", updateOpacity);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", updateOpacity);
    };
  }, [scrollControls, scrollY]);

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
        <motion.div
          className={`absolute top-1/2 left-8 transform -translate-y-1/2 z-10 text-white`}
          animate={scrollControls}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
