import React from "react";
import styles, { layout } from "../style";

import { testimonial } from "../assets";
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
          <p className={`${styles.paragraph}`}>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            illum totam id quas aperiam saepe molestiae! Pariatur ratione hic,
            consequatur inventore dolor quibusdam unde, ducimus, recusandae nemo
            illo consectetur earum."
          </p>
          <div className={`${styles.cellQuery} ${styles.statsCellContainer}`}>
            <div className={`${styles.statsCell}`}>
              <FaClipboardCheck className="text-primary text-5xl" />
              <div className={`${styles.flexCol}`}>
                <span className={`${styles.statsSpan}`}>1725</span>
                <p className={`${styles.statsCellParagraph}`}>
                  Proiecte Complete
                </p>
              </div>
            </div>
            <div className={`${styles.statsCell}`}>
              <FaUserCheck className="text-primary text-6xl" />
              <div className="flex flex-col ">
                <span className={`${styles.statsSpan}`}>2.500K</span>
                <p className={`${styles.statsCellParagraph}`}>
                  Clienti Fericiti
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Images div */}
        <div className={`${styles.colContainer} `}>
          <div className={`${styles.statsImgContainer}`}>
            <img src={testimonial} alt="poza" className="w-auto h-auto" />
   
          </div>
          {/* Button Div */}
          <div className={`${styles.btnContainer}`}>
            <button className={`${styles.btn}  h-[57px] flex `}>
              Serviciile noastre ➨
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
