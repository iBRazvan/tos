import React from "react";
import styles, { layout } from "../style";
import { teamConstants } from "../constants";
import TeamCard from "./card/TeamCard";

const Team = () => {
  return (
    <section
      className={`${styles.xyFull} ${styles.flexCol} ${styles.flexCenter} py-20 xxs:px-4 mobile:px-6`}
    >
      <div
        className={`${styles.boxWidth} ${styles.flexCol} xxs:px-2 mobile:px-6 mb-20`}
      >
        <div className="w-fit pb-11">
          <p className="border-t-4 border-l-4 pb-6 -ml-6 w-[110px] border-primary">
            {"   "}{" "}
          </p>

          <h1 className={`left-8 font-semibold text-5xl font-bebas uppercase`}>
            Echipa noastra
          </h1>
          <p
            className={`font-roboto font-semibold text-base pt-2 text-primary font-semi`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div
          className={`${styles.boxWidth} ${styles.flexCenter} ${styles.flexCol}`}
        >
          <div
            className={`grid  grid-cols-1 ss:grid-cols-2 md:grid-cols-4 gap-10 p-14`}
          >
            {teamConstants.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        </div>

        <div
          className={`${styles.flexCol} xxs:px-10 sm:px-30 lg:px-60 gap-6 items-center text-center`}
        >
          <p className={`${styles.paragraph} font-semibold`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur, expedita. Est, quos velit ea enim, aspernatur magnam
            harum ullam .
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
