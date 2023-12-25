import React from "react";
import styles, { layout } from "../style";
import { servicesConstants } from "../constants";
import Card from "./card/Card";

const Services = () => {
  console.log(servicesConstants);
  return (
    <section className="w-full h-full pb-20 ">
      <div className={`max-w-[1140px] h-auto `}>
        <div className="relative w-full h-full flex justify-center">
          <div className="absolute flex justify-center">
            <div
              className="flex justify-center"
              style={{
                display: "grid",

                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              {servicesConstants.map((service) => (
                <Card key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
