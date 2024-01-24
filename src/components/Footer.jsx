import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import styles, { layout } from "../style";

import { footer } from "../assets";
import { toslogo } from "../assets";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { footerConstants } from "../constants";

const Footer = () => {
  return (
    <section
      className={`relative shadow-[0px_-5px_30px_10px_#00000024] flex w-screen items-center justify-center h-full xxs:px-2 xs:px-6 py-10 `}
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`${styles.opacity} opacity-80 bg-black `}
        style={{ zIndex: 0 }}
      ></div>
      <div className={`${styles.boxWidth} relative`}>
        <div className=" w-full h-full xxs:px-2 mobile:px-6">
          <div className="grid xxs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4  xxs:p-0 mobile:p-2 xs:p-6 gap-10">
            {/* 1 Col */}
            <div className="flex flex-col gap-4 justify-start">
              <img
                src={toslogo}
                alt="tos"
                className="xxs:w-[70%] xxs:h-full xs:w-[45%] items-center xs:h-[100%] m-0 p-0"
              />
              <p className="text-start text-base font-roboto font-normal text-white">
                Implicam pasiune si experienta in fiecare aspect al afacerii
                noastre, pentru a livra rezultate de exceptie.
              </p>
              <div className={`flex gap-5 relative} items-start`}>
                <div
                  className={`-8 h-8 p-0 m-0 items-center flex  justify-center ${styles.hoverIcon}`}
                >
                  <FaFacebook className={`w-6 h-6 text-primary`} />
                </div>
                <div
                  className={`w-8 h-8 p-0 m-0 items-center flex  justify-center ${styles.hoverIcon}`}
                >
                  <IoLogoWhatsapp className={`w-6 h-6 text-primary`} />
                </div>
                <div
                  className={`w-8 h-8 p-0 m-0 items-center flex  justify-center ${styles.hoverIcon}`}
                >
                  <FaLinkedin className={`w-6 h-6 text-primary`} />
                </div>
              </div>
            </div>

            {/* 2,3,4 Col */}
            {footerConstants.map((colInfo) => (
              <div key={colInfo.id} className="flex flex-col gap-4">
                <h2 className="text-primary text-2xl font-bebas">
                  {colInfo.title}
                </h2>

                {colInfo.content.map((content, i) => (
                  <div key={i} className={`flex flex-row items-center gap-2`}>
                    {<content.icon className="text-primary w-6 h-6" />}
                    {content.text === "toderica.solutions@gmail.com" ? (
                      <a href="mailto:your-email@example.com" className="text-white text-base font-roboto">
                        {content.text}
                      </a>
                    ) : (
                      <p className="text-white text-base font-roboto">
                        <Link to={content.to}>{content.text}</Link>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
