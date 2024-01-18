import React from "react";
import FormCTA from "./formCTA'/FormCTA";
import styles, { layout } from "../style";

import { cta } from "../assets";

const CTA = () => {
  return (
    <section className={`${styles.boxWidth} xxs:px-2 mobile:px-6`}>
      <div
        className={`${layout.sectionTwoCols} ${styles.statsSection} sm:flex-row pt-20 gap-10 `}
      >
        {/* Images div */}
        <div
          className={`flex flex-col  xxs:w-[100%] sm:w-[35%] md:w-[50%] items-center m-4 relative mb-16 `}
        >
          <div
            className={`${styles.statsImgContainer} max-w-[346px] max-h-[661px] `}
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
            
              <div className="flex w-full h-full ">
                <div className=" w-2/6 text-primary ">ICON</div>
                <div className="flex flex-col w-2/3 text-primary">
                  <h4 className=" text-white">Consultare gratuita:</h4>
                  <h2>+40712345678</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form DIV */}
        <div className={`flex flex-col xxs:px-6 xxs:w-[100%] sm:w-[50%] `}>
          <p className="border-t-4 border-l-4 pb-6 -ml-6 w-[110px] border-primary ">
            {"   "}{" "}
          </p>
          <h3
            className={`text-5xl font-bebas text-secondary font-semibold leading-[1.2em]`}
          >
            Solicita o oferta gratuita
          </h3>
          <h4
            className={`text-lg font-poppins text-primary font-semibold mb-4`}
          ></h4>

          <div className={`${styles.statsCellContainer} flex xxs:flex-col `}>
            <FormCTA />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
