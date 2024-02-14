import React from "react";
import { statsB } from "../../assets";
import styles, { layout } from "../../style";
import { FaClipboardCheck, FaUserCheck } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { iscir, agfr, anre, tuv } from "../../assets/authlogo";

const CertificationBanner = () => {
  return (
    <section
      className={`relative flex w-screen items-center justify-center h-fit min-h-[200px] xxs:px-2 mobile:px-6`}
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
          <div
            className={`flex xxs:flex-col sm:flex-row items-center justify-center min-w-[200px] gap-5`}
          >
            <img src={tuv} className="w-[55%] h-auto" />
          </div>

          <div
            className={`flex xxs:flex-col sm:flex-row items-center justify-center min-w-[200px] gap-5`}
          >
            <img src={iscir} className="w-[55%] h-auto" />
          </div>

          <div
            className={`flex xxs:flex-col sm:flex-row items-center justify-center min-w-[200px]`}
          >
            <img src={anre} className="w-[52%] h-auto" />
          </div>
          <div
            className={`flex xxs:flex-col sm:flex-row items-center justify-center min-w-[200px] gap-5`}
          >
            <img src={agfr} className="w-[50%] h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationBanner;
