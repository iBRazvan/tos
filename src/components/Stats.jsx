import React from "react";
import styles, { layout } from "../style";
import { bgph1 } from "../assets";

const Stats = () => {
  return (
    <section className={`${layout.sectionTwoCols}`}>
      <div className={`${styles.colContainer}`}>
        <h1 className={`${styles.statsBar}`}> </h1>
        <h3 className=" text-5xl font-bebas text-secondary font-semibold leading-[1.2em]">
          Implicam pasiune si experienta in fiecare aspect al afacerii noastre,
          oentru a livra rezultate de exceptie
        </h3>
        <h4 className="text-lg font-poppins text-primary font-semibold ">
          Construim solutii impreuna
        </h4>
        <p>
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
        <div className="flex flex-row justify-between">
          <div>1725 proiecte complete</div>
          <div>2.500k clienti fericiti</div>
        </div>
      </div>
      <div className={`${styles.colContainer}  `}>
        <img src={bgph1} alt="poza" className="w-[490px] h-[327px]" />
        <button className={`${styles.btn} w-fit h-[57px]`}>
          Serviciile noastre ➨
        </button>
      </div>
    </section>
  );
};

export default Stats;
