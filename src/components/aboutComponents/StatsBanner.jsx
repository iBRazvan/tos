import React from "react";
import { statsB } from "../../assets";
import styles, { layout } from "../../style";
import { FaClipboardCheck, FaUserCheck } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";

const StatsBanner = () => {

  return (
    <section
      className={`relative flex w-screen items-center justify-center h-fit min-h-[280px] xxs:px-2 mobile:px-6`}
      style={{
        backgroundImage: `url(${statsB})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full opacity-100 brightness-[100%] shadow-xl bg-primary"
        style={{ zIndex: 0 }}
      ></div>
      <div className={`${styles.boxWidth} relative `}>
        <div className="grid xxs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-20 gap-10">
          <div className={`flex xxs:flex-col sm:flex-row items-center min-w-[200px] gap-5`}>
            <FaClipboardCheck className="text-secondary text-5xl" />
            <div className="flex flex-col text-center">
              <span
                className={`text-5xl font-bebas font-semibold leading-[1.2em] text-secondary`}
              >
                1725
              </span>
              <p className={`text-lg font-roboto font-semibold text-secondary`}>
                Proiecte Complete
              </p>
            </div>
          </div>

          <div className={`flex xxs:flex-col sm:flex-row items-center min-w-[200px] gap-5`}>
            <FaUserCheck className="text-secondary text-6xl" />
            <div className="flex flex-col text-center">
              <span
                className={`text-5xl font-bebas font-semibold leading-[1.2em] text-secondary`}
              >
                +2.000
              </span>
              <p className={`text-lg font-roboto font-semibold text-secondary`}>
                Clienti Fericiti
              </p>
            </div>
          </div>

          <div className={`flex xxs:flex-col sm:flex-row items-center min-w-[200px] gap-5`}>
            <AiFillProject className="text-secondary text-6xl" />
            <div className="flex flex-col text-center">
              <span
                className={`text-5xl font-bebas font-semibold leading-[1.2em] text-secondary`}
              >
                +100
              </span>
              <p className={`text-lg font-roboto font-semibold text-secondary`}>
                Proiecte in desfasurare
              </p>
            </div>
          </div>
          <div className={`flex xxs:flex-col sm:flex-row items-center min-w-[200px] gap-5`}>
            <FaPeopleGroup className="text-secondary text-6xl" />
            <div className="flex flex-col text-center">
              <span
                className={`text-5xl font-bebas font-semibold leading-[1.2em] text-secondary`}
              >
                +2.500
              </span>
              <p className={`text-lg font-roboto font-semibold text-secondary`}>
                Aprecieri
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
