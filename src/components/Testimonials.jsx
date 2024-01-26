import React from "react";
import styles, { layout } from "../style";
import Rating from "@mui/material/Rating";

import { avatarT, testimonial } from "../assets";
import { ImQuotesLeft } from "react-icons/im";

const Testimonials = () => {
  return (
    <section className={`${styles.boxWidth} xxs:px-2 mobile:px-6`}>
      <div
        className={`${layout.sectionTwoCols} xxs:items-center md:items-start pt-20`}
      >
        <div className={`${styles.colContainer} `}>
          <p className="border-t-4 border-l-4 pb-6 -ml-6 w-[110px] border-primary">
            {"   "}{" "}
          </p>
          <h3
            className={`text-5xl font-bebas text-secondary font-semibold leading-[1.2em]`}
          >
            Recenzii
          </h3>
          <h4
            className={`text-lg font-poppins text-primary font-semibold mb-4`}
          >
            Ce spun clientii despre noi?
          </h4>
          <div className="flex flex-row items-center pt-6">
            <div className="flex  max-w-20 max-h-20 ">
              <img
                src={avatarT}
                className="border-primary border-2 rounded-full scale-110 "
              />
            </div>

            <div className="pl-6">
              <h2 className="font-bebas text-primary text-2xl">Costin</h2>{" "}
              <p className="font-roboto text-text font-medium">Client</p>
              <Rating name="read-only" value={5} className="pt-2" readOnly />
            </div>
          </div>
          <div className={` flex flex-col items-start   justify-between py-4`}>
            <div className="pt-2">
              <ImQuotesLeft className="w-8 h-8 text-primary" />
            </div>
            <div className="py-4">
              <p className={`${styles.paragraph} font-semibold`}>
                "Experiența mea cu această companie a fost excepțională! Echipa
                lor de profesioniști, de la ingineri și proiectanți la
                arhitecți, a depășit cu mult așteptările mele. Au adus o
                combinație perfectă de expertiză tehnică și creativitate în
                proiectul meu de construcție și renovare. Lucrările au fost
                finalizate în termen, iar rezultatul final a fost peste
                așteptările mele. Recomand cu încredere serviciile lor pentru
                cei care caută calitate, profesionalism și o echipă dedicată."
              </p>
            </div>
          </div>
        </div>
        {/* Images div */}
        <div
          className={`flex flex-col  xxs:w-[100%] md:w-[50%] px items-center`}
        >
          <div className={`relative flex h-fit mt-20`}>
            <img src={testimonial} alt="poza" className="w-auto h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
