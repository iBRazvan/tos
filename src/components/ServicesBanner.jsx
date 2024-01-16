import React from "react";
import styles, { layout } from "../style";

import { servicesBanner } from "../assets";

const ServicesBanner = () => {
  return (
    <section
      className={`${layout.sectionServicesBanner} relative px-6 `}
      style={{
        backgroundImage: `url(${servicesBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`${styles.opacity} bg-black`} style={{ zIndex: 0 }}></div>
      <div className={`${styles.boxWidth} relative`}>
        <div className="w-fit xxs:px-2 mobile:px-6  ">
          <p className="border-t-4 border-l-4 pb-6 -ml-6 w-[110px] border-primary ">
            {"   "}{" "}
          </p>

          <h1 className={`${styles.servicesHeader} text-white`}>
            Serviciile noastre
          </h1>
          <p className={`${styles.servicesParagraph} text-white font-semi`}>
            Unde ideile prind viață prin serviciile noastre.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
