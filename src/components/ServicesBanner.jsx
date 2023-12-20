import React from "react";
import styles, { layout } from "../style";

import { services } from "../assets";

const ServicesBanner = () => {
  return (
    <section
      className={`${layout.sectionServicesBanner} relative `}
      style={{
        backgroundImage: `url(${services})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`${styles.opacity}`} style={{ zIndex: 0 }}></div>
      <div className={`${styles.boxWidth} relative`}>
        <div className="w-fit">
          <p className="border-t-4 border-l-4 pb-6 left w-[30%] border-primary fonmt">
            {"   "}{" "}
          </p>

          <h1 className={`${styles.servicesHeader} pl-6`}>
            Serviciile noastre
          </h1>
          <p className={`${styles.servicesParagraph} font-semi`}>
            Unde Ideile Prind Viață Prin Serviciile Noastre.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
