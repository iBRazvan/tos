import React from "react";
import styles, { layout } from "../style";

import { bgph1 } from "../assets";

const ServicesBanner = () => {
  return (
    <section
      className={`${layout.sectionServicesBanner} relative `}
      style={{
        backgroundImage: `url(${bgph1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`${styles.opacity} opacity-80 brightness-[90%] shadow-xl bg-primary`} style={{ zIndex: 0 }}></div>
      <div className={`${styles.boxWidth} relative flex flex-row`}>
        <div className=" w-1/2">
          <p className="border-t-4 border-l-4 pb-6 left w-[30%] border-white">
            {"   "}{" "}
          </p>

          <h1 className={`${styles.servicesHeader} text-white pl-6`}>
            Implicam pasiune si experienta in fiecare aspect al afacerii noastre, pentru a livra rezultate de exceptie
          </h1>
          <p className={`${styles.servicesParagraph} text-white font-semi`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis provident beatae quis sed tempora voluptates doloribus, libero voluptatum officia.
          </p>
        </div>
        <div className="flex w-1/2 pl-40 pt-10">
        <button className={` hover:bg-text text-white xxs:py-3 xxs:px-6 ss:py-4 ss:px-8 rounded font-[600] bg-secondary xxs:text-[16px] ss:text-[18px] font-poppins items-center w-fit h-[57px]`}>
          Contacteaza-ne ➨
        </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
