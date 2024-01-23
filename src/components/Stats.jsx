import React from "react";
import styles, { layout } from "../style";

import { stats1, stats2 } from "../assets";
import { FaClipboardCheck } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Stats = () => {
  return (
    <section
      className={`${layout.sectionTwoCols} ${styles.statsSection} xxs:px-2 mobile:px-6`}
    >
      <div className={`${styles.boxWidth}${styles.colContainer} `}>
        <p className="border-t-4 border-l-4 -ml-6 pb-6  w-[110px] border-primary">
          {"   "}{" "}
        </p>
        <h3
          className={`text-5xl font-bebas text-secondary font-semibold leading-[1.2em]`}
        >
          Implicam pasiune si experienta in fiecare aspect al afacerii noastre,
          pentru a livra rezultate de exceptie
        </h3>
        <h4 className={`text-lg font-roboto text-primary font-semibold mb-4`}>
          Construim solutii impreuna
        </h4>
        <p className={`${styles.paragraph}`}>
          Suntem o echipă dedicată, pasionată de excelență și inovație. Ne-am
          angajat să oferim soluții personalizate și de înaltă calitate,
          adaptate nevoilor fiecărui client. Cu o experiență vastă și o abordare
          proactivă, transformăm viziunile în realitate. Ne mândrim cu
          rezultatele noastre și suntem mereu în căutarea modurilor de a crește
          și de a aduce valoare adăugată în fiecare proiect. Transparenta,
          comunicarea deschisă și relațiile de încredere stau la baza
          colaborării noastre cu clienții și partenerii. Alege să lucrezi cu noi
          și vei descoperi o experiență profesională excepțională, susținută de
          angajamentul nostru de a livra rezultate remarcabile
        </p>
        <div
          className={`${styles.cellQuery} flex flex-row justify-between py-10`}
        >
          <div
            className={`flex xxs:flex-col sm:flex-row items-center min-w-[200px] gap-5`}
          >
            <FaClipboardCheck className="text-primary text-5xl" />
            <div className="flex flex-col text-center">
              <span
                className={`text-5xl font-bebas text-secondary font-semibold leading-[1.2em]`}
              >
                1725
              </span>
              <p className={`text-lg font-roboto text-text font-semibold`}>
                Proiecte Complete
              </p>
            </div>
          </div>
          <div
            className={`flex xxs:flex-col sm:flex-row items-center min-w-[200px] gap-5`}
          >
            <FaUserCheck className="text-primary text-6xl" />
            <div className="flex flex-col text-center">
              <span
                className={`text-5xl font-bebas text-secondary font-semibold leading-[1.2em]`}
              >
                2.500K
              </span>
              <p className={`text-lg font-roboto text-text font-semibold`}>
                Clienti Fericiti
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Images div */}
      <div className={`${styles.colContainer} `}>
        <div className={`relative flex h-fit`}>
          <img src={stats1} alt="poza" className="w-auto h-auto" />
          <div
            className={`absolute w-auto h-auto xxs:-right-[40px] xxs:-bottom-6 xs:-bottom-20 md:-right-[100px] sm:-right-10 sm:-bottom-24 1200:-right-[100px] 1200:top-40 -bottom-[100px] pr-10`}
          >
            <img
              src={stats2}
              alt="poza"
              className={`w-auto max-h-[400px] border-white border-[15px] xxs:w-36  xxs:border-4 xs:w-48 xs:-bottom-10 ss:w-60 ss:-bottom-14 sm:w-64 1200:w-46`}
            />
          </div>
        </div>
        {/* Button Div */}
        <div className={`flex  w-full pt-10 md:pt-10`}>
          <Link to="/servicesdetail">
          <button className={`${styles.btn}  h-[57px] flex `}>
            Serviciile noastre ➨
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Stats;
