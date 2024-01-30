import React from "react";
import styles, { layout } from "../../style.js";

import { stats1, stats2, tm1 } from "../../assets";
import { ImQuotesLeft } from "react-icons/im";
import { Link } from "react-router-dom";

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
            10 ani experienta in servicii de constructii
          </h3>
          <h4 className={`text-lg font-roboto text-primary font-semibold mb-4`}>
            O lungă călătorie în lumea construcțiilor - împreună transformăm
            idei în realitate!
          </h4>
          <div
            className={`${styles.cellQuery} flex flex-row justify-between py-10`}
          >
            <div className="flex flex-col gap-4">
              <h4
                className={`text-text text-lg md:text-base lg:text-base font roboto font-semibold`}
              >
                "De la concept la construcție, aducem idei la viață. Suntem o
                echipă de excelență, definind standardele în construcții. O
                poveste de succes în fiecare proiect."
              </h4>
              <p className={`${styles.paragraph} font-normal`}>
                Cu o abordare integrată și atenție la detalii, transformăm
                visele clienților în proiecte durabile și estetice. Experiența
                noastră vastă și angajamentul pentru excelență ne plasează în
                fruntea industriei construcțiilor.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex justify-center rounded-full xxs:w-[150px] xxs:h-[150px] ss:w-[302px] ss:h-[302px] md:w-[102px] md:h-[102px] border-2 border-primary">
              <img src={tm1} className="border-primary rounded-full" />
            </div>

            <div className="pl-6">
              <h2 className="font-bebas black text-2xl">Florin Toderica</h2>{" "}
              <p className="font-poppins text-text font-normal">
                Ceo & Founder of Toderica Solutions
              </p>
            </div>
          </div>
        </div>
        {/* Image section */}
        <div className={`${styles.colContainer} `}>
          <div className={`relative flex h-fit`}>
            <img src={stats1} alt="poza" className="w-auto h-auto" />
            <div
              className={`absolute w-auto h-auto xxs:-right-[40px] xxs:-bottom-6 xs:-bottom-20 md:-right-[100px] sm:-right-10 sm:-bottom-24 1200:-right-[100px] 1200:top-40 -bottom-[100px] pr-10Img`}
            >
              <img
                src={stats2}
                alt="poza"
                className={`w-auto max-h-[400px] border-white border-[15px] xxs:w-36  xxs:border-4 xs:w-48 xs:-bottom-10 ss:w-60 ss:-bottom-14 sm:w-64  1200:w-46`}
              />
            </div>
          </div>
          {/* Button Div */}
          <div className={`flex  w-full pt-10 md:pt-10`}>
            <Link to="/contact">
              <button className={`${styles.btn} h-[57px] flex`}>
                Contacteaza-ne ➨
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
