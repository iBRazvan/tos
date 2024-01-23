import React from "react";
import styles, { layout } from "../style";

import { servicesBanner } from "../assets";

const ServicesBanner = () => {
  return (
    <section
      className={`relative flex w-screen h-[348px] items-center justify-center px-6 `}
      style={{
        backgroundImage: `url(${servicesBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`${styles.opacity} bg-black`} style={{ zIndex: 0 }}></div>
      <div className={`${styles.boxWidth} relative`}>
        <div className="w-fit xxs:px-2 mobile:px-6">
          <p className="border-t-4 border-l-4 pb-6 -ml-6 w-[110px] border-primary ">
            {"   "}{" "}
          </p>

          <h1
            className={`left-8 uppercase font-semibold text-5xl font-bebas text-white`}
          >
            Serviciile noastre
          </h1>
          <p
            className={`font-roboto font-semibold text-base pt-2 text-white font-semi`}
          >
            Unde ideile prind viață prin serviciile noastre.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
