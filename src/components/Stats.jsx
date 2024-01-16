import React from "react";
import styles, { layout } from "../style";

import { stats1, stats2 } from "../assets";
import { FaClipboardCheck } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

const Stats = () => {
  return (
    <section className={`${layout.sectionTwoCols} ${styles.statsSection} xxs:px-2 mobile:px-6  `}>
      <div className={`${styles.boxWidth}${styles.colContainer} `}>
      <p className="border-t-4 border-l-4 -ml-6 pb-6  w-[110px] border-primary">
            {"   "}{" "}
          </p>
        <h3 className={`${styles.statsHeader3}`}>
          Implicam pasiune si experienta in fiecare aspect al afacerii noastre,
          pentru a livra rezultate de exceptie
        </h3>
        <h4 className={`${styles.statsHeader4}`}>Construim solutii impreuna</h4>
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
        <div className={`${styles.cellQuery} ${styles.statsCellContainer}`}>
          <div className={`${styles.statsCell}`}>
            <FaClipboardCheck className="text-primary text-5xl" />
            <div className="flex flex-col text-center">
              <span className={`${styles.statsSpan}`}>1725</span>
              <p className={`${styles.statsCellParagraph}`}>
                Proiecte Complete
              </p>
            </div>
          </div>
          <div className={`${styles.statsCell}`}>
            <FaUserCheck className="text-primary text-6xl" />
            <div className="flex flex-col text-center">
              <span className={`${styles.statsSpan}`}>2.500K</span>
              <p className={`${styles.statsCellParagraph}`}>Clienti Fericiti</p>
            </div>
          </div>
        </div>
      </div>
      {/* Images div */}
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
            Serviciile noastre ➨
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
