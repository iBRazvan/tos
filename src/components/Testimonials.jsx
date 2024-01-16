import React from "react";
import styles, { layout } from "../style";

import { testimonial } from "../assets";
import { ImQuotesLeft } from "react-icons/im";
import { FaClipboardCheck } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className={`${styles.boxWidth}`}>
      <div className={`${layout.sectionTwoCols} ${styles.statsSection} pt-12 `}>
        <div className={`${styles.colContainer} `}>
          <p className="border-t-2 border-l-2 pb-6 -ml-6 w-[30%] border-primary ">
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
            consequatur inventore dolor quibusdam unde, ducimus, recusandae nemo
            illo consectetur earum."
          </p>
            
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
