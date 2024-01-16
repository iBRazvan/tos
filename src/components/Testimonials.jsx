import React from "react";
import styles, { layout } from "../style";

import { r1, testimonial } from "../assets";
import { ImQuotesLeft } from "react-icons/im";

const Testimonials = () => {
  return (
    <section className={`${styles.boxWidth} xxs:px-2 mobile:px-6`}>
      <div className={`${layout.sectionTwoCols} ${styles.statsSection} pt-12 `}>
        <div className={`${styles.colContainer} `}>
          <p className="border-t-4 border-l-4 pb-6 -ml-6 w-[110px] border-primary ">
            {"   "}{" "}
          </p>
          <h3 className={`${styles.statsHeader3}`}>Recenzii</h3>
          <h4 className={`${styles.statsHeader4}`}>
            Ce spun clientii despre noi?
          </h4>
          <div className="pt-2 ">
            <ImQuotesLeft className="w-8 h-8 text-primary" />
          </div>
          <div className={`${styles.cellQuery} ${styles.statsCellContainer}`}>
            <p className={`${styles.paragraph} font-semibold`}>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              illum totam id quas aperiam saepe molestiae! Pariatur ratione hic,
              consequatur inventore dolor quibusdam unde, ducimus, recusandae
              nemo illo consectetur earum."
            </p>
          </div>
          <div className="flex flex-row items-center ">
            <div className="flex rounded-full w-20 h-20 border-2 border-primary  ">
              <img src={r1} className=" border-primary rounded-full " />
            </div>

            <div className="pl-6">
              <h2 className="font-bebas text-primary text-2xl ">Cristian</h2>{" "}
              <p className="font-poppins text-text font-normal ">Client</p>
            </div>
          </div>
        </div>
        {/* Images div */}
        <div className={`${styles.colContainer} items-center`}>
          <div className={`${styles.statsImgContainer} `}>
            <img src={testimonial} alt="poza" className="w-auto h-auto " />
          </div>
        </div>
      </div>
        
    </section>
  );
};

export default Testimonials;
