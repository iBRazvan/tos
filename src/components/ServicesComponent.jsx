import React from "react";
import styles, { layout } from "../style";
import { servicesConstants } from "../constants";
import Card from "./card/Card";
import { Link } from "react-router-dom";
import { DepthCard } from "../utils/DepthCard";

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
            <DepthCard key={service.id}>
              <Card service={service} cardType="service" />
            </DepthCard>
          ))}
        </div>
      </div>

      <div
        className={`${styles.flexCol} xxs:px-10 sm:px-30 lg:px-60 px-60 gap-6 items-center text-center`}
      >
        <p className={`${styles.paragraph} font-semibold`}>
          Prin abordarea noastră proactivă și dedicată, oferim servicii complete
          pentru toate nevoile dumneavoastra de construcție și renovare. De la
          instalarea și întreținerea sistemelor sanitare și electrice, la
          soluții complete pentru pardoseli, acoperișuri, și renovare, suntem
          alegerea ideală pentru transformarea visurilor dumneavoastra în
          realitate. În plus, vă oferim expertiză în prelucrarea și fasonarea
          sticlei, aducând un plus de rafinament și funcționalitate proiectului
          dumneavoastra Alegeți calitatea, alegeți profesionalismul, alegeți
          serviciile noastre pentru a vă asigura că fiecare aspect al
          proiectului dumneavoastra este gestionat cu atenție și experiență.
        </p>
        <Link to="/servicesdetail">
          <button className={`${styles.btn}  h-[57px] flex mt-6`}>
            Descarca serviciile noastre
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesComponent;
