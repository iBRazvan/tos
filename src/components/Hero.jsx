import React, { useState, useEffect } from "react";
import { bgph1, bgph2 } from "../assets";
import styles from "../style";

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
      className="w-screen h-screen relative "
      style={{
        backgroundImage: `url(${backgroundImages[backgroundImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...transitionStyle,
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        style={{ zIndex: 0 }}
      ></div>
      {/* Your Hero content goes here */}
      <div className={`${styles.heroContent} ${styles.paddingX}`}>
        <h1 className="text-4xl md:text-4xl font-bold mb-4 text-primary font-bebas">
          Bun venit la <span className={`${styles.heroSpan}`}>TODERICA</span>{" "}
          <span className="text-primary">SOLUTIONS</span>
        </h1>
        <div className={`${styles.heroServices} max-w-3xl`}>
          Servicii de constructie, renovare si proiectare
        </div>
        <p className={`${styles.heroParagraph}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className={`${styles.btn} `}>Mai multe ➨</button>
      </div>
    </section>
  );
};

export default Hero;
