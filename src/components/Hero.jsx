import React, { useState, useEffect } from "react";
import { bgph1, bgph2 } from "../assets";
import styles from "../style";
import { layout } from "../style";

const Hero = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  // Define your background images
  const backgroundImages = [bgph1, bgph2];

  useEffect(() => {
    // Function to change the background image
    const changeBackgroundImage = () => {
      setBackgroundImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    };

    // Set interval to change background image every 5 seconds (adjust as needed)
    const intervalId = setInterval(changeBackgroundImage, 10000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const transitionStyle = {
    transition: "background-image 2s ease-in-out",
  };

  return (
    <section
      className={`${layout.sectionHero} `}
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
        <div className={`${styles.heroContent} ${styles.boxWidth}  `}>
          <div className={`${styles.heroContainer}`}>
            <h1 className={`${styles.heroHeader}`}>
              Bun venit la{" "}
              <span className={`${styles.heroSpan}`}>TODERICA</span>{" "}
              <span className="text-primary">SOLUTIONS</span>
            </h1>
            <div className={`${styles.heroServices}`}>
              Servicii de constructie, renovare si proiectare
            </div>
            <div className={`${styles.paragraphContainer}`}>
              <p className={`${styles.paragraph} text-white`}>
                Calitate și inovație, fundamentul nostru solid.
              </p>
            </div>
          </div>
          <button className={`${styles.btn}  mt-12`}>Mai multe ➨</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
