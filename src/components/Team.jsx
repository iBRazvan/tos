import React from "react";
import styles, { layout } from "../style";
import { teamConstants } from "../constants";
import TeamCard from "./card/TeamCard";

const Team = () => {
  return (
    <section
      className={`${styles.xyFull} ${styles.flexCol} ${styles.flexCenter} py-20 px-4`}
    >
      <div className={`${styles.boxWidth} ${styles.flexCol} mb-20 `}>
        <div className="w-fit pb-11 ">
          <p className="border-t-4 border-l-4 pb-6 left w-[30%] border-primary ">
            {"   "}{" "}
          </p>

          <h1 className={`${styles.servicesHeader} pl-6`}>
           Echipa noastra
          </h1>
          <p className={`${styles.servicesParagraph} text-primary font-semi`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
        <div
          className={`${styles.boxWidth} ${styles.flexCenter} ${styles.flexCol}`}
        >
          <div className={`grid  grid-cols-1 ss:grid-cols-2 md:grid-cols-4 gap-10 p-14`}>
            {teamConstants.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        </div>
          
      <div className={`${styles.flexCol} px-60 gap-6 items-center text-center`}>
        <p className={`${styles.paragraph}`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          expedita. Est, quos velit ea enim, aspernatur magnam harum ullam sunt
          suscipit consequatur assumenda minima quam ut. Temporibus quasi esse
          dolores?
        </p>
        <button className={`${styles.btn} w-fit h-[57px]`}>
          Hai in echipa noastra ➨
        </button>
      </div>
      </div>
    </section>
  );
};

export default Team;
