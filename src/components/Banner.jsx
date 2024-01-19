import React from "react";
import styles, { layout } from "../style";

import { bgph2 } from "../assets";

const Banner = () => {
  return (
    <section
      className={`${layout.sectionServicesBanner} h-fit min-h-[280px] relative xxs:px-2 mobile:px-6  `}
      style={{
        backgroundImage: `url(${bgph2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`${styles.opacity} opacity-50 brightness-[90%] shadow-xl bg-black`}
        style={{ zIndex: 0 }}
      ></div>
      <div
        className={`${styles.boxWidth} xxs:py-6 relative flex xxs:flex-col sm:flex-row`}
      >
        <div className="xxs:w-fit sm:w-1/2 ">
          <p className="border-t-4 border-l-4 pb-6 w-[110px] border-white">
            {"   "}{" "}
          </p>

          <h1 className={`${styles.servicesHeader} text-white pl-6`}>
            Despre <span className="text-primary"> noi</span>
          </h1>
          <p
            className={`${styles.servicesParagraph} pl-6 text text-white font-[500]`}
          >
            Acasa/
            <span className="font-[600] text-primary">Despre</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
