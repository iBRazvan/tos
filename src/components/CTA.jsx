import React from "react";
import FormCTA from "./formCTA'/FormCTA";
import styles, { layout } from "../style";

import { cta } from "../assets";
import { FaSquarePhone } from "react-icons/fa6";

const CTA = () => {
  return (
    <section className={`${styles.boxWidth} xxs:px-2 mobile:px-6`}>
      <div
        className={`${layout.sectionTwoCols} ${styles.statsSection} sm:flex-row pt-20 xxs:gap-4 md:gap-10 `}
      >
        {/* Images div */}
        <div
          className={`flex flex-col  xxs:w-full sm:w-[45%] md:w-1/2 items-center m-4 relative mb-16 `}
        >
          <div
            className={`relative flex h-fittainer} max-w-[346px] max-h-[661px] `}
          >
            <img
              src={cta}
              alt="poza"
              className="mobile:w-auto h-auto xxs:w-screen "
            />
            <div
              className={`absolute w-full h-32 bottom-0 bg-black`}
              style={{ background: "rgba(0, 0, 0, 0.5)" }}
            >
              <div className="flex w-full h-full gap-2 ">
                <div className=" w-[25%] text-primary ">
                  <div className="w-full h-full flex justify-center items-center">
                    <FaSquarePhone className="xxs:w-14 xxs:h-14 xs:w-16 xs:h-16" />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start w-[75%] text-primary">
                  <h4 className=" xxs:text-xl xs:text-2xl font-bebas font-medium text-white">Consultare gratuita:</h4>
                  <h2 className=" xxs:text-5xl xxs:text-[36px] mobile:text-5xl mobile:text-[44px] xs:text-5xl font-bebas font-semibold text-primary">+40712345678</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form DIV */}
        <div className={`flex flex-col xxs:px-6 xxs:w-full sm:w-[55%] md:w-1/2 `}>
          <p className="border-t-4 border-l-4 pb-6 -ml-6 w-[110px] border-primary ">
            {"   "}{" "}
          </p>
          <h3
            className={`text-5xl font-bebas text-secondary font-semibold leading-[1.2em]`}
          >
            Solicita o oferta gratuita
          </h3>
          <h4
            className={`text-lg font-roboto text-primary font-semibold mb-4`}
          >Obține o ofertă gratuită personalizată acum! Contactează-ne și descoperă soluțiile noastre adaptate nevoilor tale.</h4>

          <div className={`flex flex-row justify-between py-10 xxs:flex-col `}>
            <FormCTA />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
