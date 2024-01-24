import React from "react";
import styles, { layout } from "../style";

import { bgph1 } from "../assets";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <section
      className={`relative flex w-screen  items-center justify-center h-fit min-h-[348px] xxs:px-2 mobile:px-6`}
      style={{
        backgroundImage: `url(${bgph1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`${styles.opacity} opacity-80 brightness-[90%] shadow-xl bg-primary`}
        style={{ zIndex: 0 }}
      ></div>
      <div
        className={`${styles.boxWidth} xxs:py-6 relative flex xxs:flex-col sm:flex-row`}
      >
        <div className="xxs:w-fit sm:w-1/2">
          <p className="border-t-4 border-l-4 pb-6 w-[110px] border-white">
            {"   "}{" "}
          </p>

          <h1
            className={`left-8 font-semibold text-5xl font-bebas uppercase text-white pl-6`}
          >
            Implicam pasiune si experienta in fiecare aspect al afacerii
            noastre, pentru a livra rezultate de exceptie
          </h1>
    
        </div>
        <div className="flex xxs:w-full xxs:justify-center sm:w-1/2 md:pl-40 pt-10">
          
        <Link to="/contact">
          <button className={`hover:bg-text text-white xxs:py-3 xxs:px-6 ss:py-4 ss:px-8 rounded font-[600] bg-secondary xxs:text-[16px] ss:text-[18px] font-roboto items-center w-fit h-[57px]`}>
          Contacteaza-ne ➨
          </button>
        </Link>
          
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
