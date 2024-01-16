import React from "react";
import styles, { layout } from "../style";

import { servicesBanner } from "../assets";

const ServicesBanner = () => {
  return (
    <section
      className={`${layout.sectionServicesBanner} relative `}
      style={{
        backgroundImage: `url(${servicesBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`${styles.opacity} bg-black`} style={{ zIndex: 0 }}></div>
      <div className={`${styles.boxWidth} relative`}>
        <div className="w-fit">
          <p className="border-t-4 border-l-4 pb-6 left w-[30%] border-primary fonmt">
            {"   "}{" "}
          </p>

          <h1 className={`${styles.servicesHeader} text-white pl-6`}>
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
