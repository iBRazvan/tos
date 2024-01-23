import React from "react";
import styles, { layout } from "../style";
import { servicesConstants } from "../constants";
import Card from "./card/Card";
import { Link } from "react-router-dom";

const ServicesComponent = () => {
  return (
    <section
      className={`${styles.boxWidth} ${styles.flexCenter} ${styles.flexCol} mb-20 `}
    >
      <div
        className={`${styles.xyFull} ${styles.flexCenter} px-7 mb-20 -mt-12 z-10`}
      >
        <div className={`${styles.gridCols} gap-10`}>
          {servicesConstants.map((service) => (
            <Card key={service.id} service={service} cardType="service" />
          ))}
        </div>
      </div>

      <div
        className={`${styles.flexCol} xxs:px-10 sm:px-30 lg:px-60 px-60 gap-6 items-center text-center`}
      >
        <p className={`${styles.paragraph} font-semibold`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          expedita. Est, quos velit ea enim, aspernatur magnam harum ullam sunt
          suscipit consequatur assumenda minima quam ut. Temporibus quasi esse
          dolores?
        </p>
        <Link to="/servicesdetail">
          <button className={`${styles.btn}  h-[57px] flex `}>
            Descarca serviciile noastre
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesComponent;
