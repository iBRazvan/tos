import React from "react";
import styles, { layout } from "../style";

import { stats1, stats2 } from "../assets";
import { FaClipboardCheck } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

const Stats = () => {
  return (
    <section className={`${layout.sectionTwoCols}  `}>
      <div className={`${styles.boxWidth}${styles.colContainer} `}>
        <h1 className={`${styles.statsBar}`}> </h1>
        <h3 className=" text-5xl font-bebas text-secondary font-semibold leading-[1.2em]">
          Implicam pasiune si experienta in fiecare aspect al afacerii noastre,
          pentru a livra rezultate de exceptie
        </h3>
        <h4 className="text-lg font-poppins text-primary font-semibold ">
          Construim solutii impreuna
        </h4>
        <p className="font-[400px]">
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
          className={`${styles.cellQuery}flex flex-row justify-between py-10`}
        >
          <div className="flex xxs:flex-col sm:flex-row items-center min-w-[200px] gap-5">
            <FaClipboardCheck className="text-primary text-5xl" />
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bebas text-secondary font-semibold leading-[1.2em]">
                1725
              </span>
              <p className="xxs:text-base ss:text-lg font-poppins text-text font-semibold ">
                Proiecte Complete
              </p>
            </div>
          </div>
          <div className="flex xxs:flex-col sm:flex-row items-center min-w-[200px] gap-5">
            <FaUserCheck className="text-primary text-6xl" />
            <div className="flex flex-col ">
              <span className="text-5xl font-bebas text-secondary font-semibold leading-[1.2em]">
                2.500K
              </span>
              <p className="text-lg font-poppins text-text font-semibold ">
                Clienti Fericiti
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.colContainer}  justify-around `}>
        {/* Images div */}
        <div className="relative flex h-fit">
          <img src={stats1} alt="poza" className="w-auto h-auto" />
          <div className="absolute w-auto xxs:-right-[40] md:-right-[100px] -bottom-[100px] pr-10 ">
            <img
              src={stats2}
              alt="poza"
              className="w-auto max-h-[400px]  -bottom-1/2 border-white border-[15px]"
            />
          </div>
        </div>
        {/* Button Div */}
        <div className="flex items-center w-full">
          <button className={`${styles.btn}  h-[57px] flex`}>
            Serviciile noastre ➨
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
