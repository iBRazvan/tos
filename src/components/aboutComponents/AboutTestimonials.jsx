import React from "react";
import styles, { layout } from "../../style.js";

import { stats1, stats2, tm1 } from "../../assets";
import { ImQuotesLeft } from "react-icons/im";

const AboutTestimonials = () => {
  return (
    <section className={`${styles.boxWidth} xxs:px-2 mobile:px-6`}>
      <div
        className={`${layout.sectionTwoCols} xxs:items-center md:items-start py-20 gap-10 `}
      >
        <div className={`${styles.colContainer} `}>
          <p className="border-t-4 border-l-4 pb-6 -ml-6 w-[110px] border-primary ">
            {"   "}{" "}
          </p>
          <h3
            className={`text-5xl font-bebas text-secondary font-semibold leading-[1.2em]`}
          >
            10 ani experienta in servicii de constructie
          </h3>
          <h4 className={`text-lg font-roboto text-primary font-semibold mb-4`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>
          <div className={`${styles.cellQuery} ${styles.statsCellContainer}`}>
            <div className="flex flex-col gap-4">
              <h4
                className={`text-text text-lg md:text-base lg:text-base font roboto font-semibold`}
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.""
              </h4>
              <p className={`${styles.paragraph} font-normal`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                illum totam id quas aperiam saepe molestiae! Pariatur ratione
                hic, consequatur inventore dolor quibusdam unde, ducimus,
                recusandae nemo illo consectetur earum.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center ">
          <div className="flex justify-center rounded-full xxs:w-[150px] xxs:h-[150px] ss:w-[302px] ss:h-[302px] md:w-[102px] md:h-[102px] border-2 border-primary  ">
              <img src={tm1} className="border-primary rounded-full" />
            </div>

            <div className="pl-6">
              <h2 className="font-bebas black text-2xl ">Florin Toderica</h2>{" "}
              <p className="font-poppins text-text font-normal ">
                Ceo & Founder of Toderica Solutions
              </p>
            </div>
          </div>
        </div>
        {/* Image section */}
        <div className={`${styles.colContainer} `}>
        <div className={`${styles.statsImgContainer}`}>
          <img src={stats1} alt="poza" className="w-auto h-auto" />
          <div className={`${styles.statsAbsoluteImg}`}>
            <img src={stats2} alt="poza" className={`${styles.statsImg}`} />
          </div>
        </div>
        {/* Button Div */}
        <div className={`${styles.btnContainer}`}>
          <button className={`${styles.btn}  h-[57px] flex `}>
            Contacteaza-ne ➨
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
