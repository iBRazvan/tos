import React from "react";
import styles, { layout } from "../style";

import { babg } from "../assets";
import AwardsCarousel from "./awardsCarousel/AwardsCarousel";
import SlickCarousel from "./awardsCarousel/SlickCarousel";

const TestimonialsBanner = () => {
  return (
    <section
      className={`${layout.sectionServicesBanner} min-h-[348px] relative xxs:px-2 mobile:px-10 shadow-black shadow-inner `}
      style={{
        backgroundImage: `url(${babg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`${styles.opacity} opacity-80 brightness-[90%] shadow-xl bg-primary`}
        style={{ zIndex: 0 }}
      ></div>
      <div
        className={`${styles.boxWidth} xxs:py-6 relative min-h-[348px] flex justify-center flex-col`}
      >
        <SlickCarousel/>
   
      </div>
    </section>
  );
};

export default TestimonialsBanner;
