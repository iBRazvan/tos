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
      className={`${layout.sectionServicesBanner} h-full relative xxs:px-2 xs:px-6 `}
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`${styles.opacity} opacity-80 bg-black`}
        style={{ zIndex: 0 }}
      ></div>
      <div className={`${styles.boxWidth} relative`}>
        <div className=" w-full h-full xxs:px-2 mobile:px-6">
          <div className="grid xxs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4  xxs:p-0 mobile:p-2 xs:p-6 gap-10 ">
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
              <div className={`${styles.navSocialContainer} items-start`}>
                <div className={`${styles.navSocial} ${styles.hoverIcon} `}>
                  <FaFacebook className={`w-6 h-6 text-primary`} />
                </div>
                <div className={`${styles.navSocial} ${styles.hoverIcon} `}>
                  <IoLogoWhatsapp className={`w-6 h-6 text-primary`} />
                </div>
                <div className={`${styles.navSocial} ${styles.hoverIcon} `}>
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
                  <div key={i} className={`${content.icon.name !== "FaLongArrowAltRight" && "xxs:flex-row mobile:flex-row xxs:items-start mobile:items-center" }} flex flex-row items-center gap-2`}>
                    {<content.icon className="text-primary w-6 h-6" />}

                    {console.log("Content",content, "image", content.icon.name)}
                    <p className="text-white text-base font-roboto">
                      <Link to={content.to}>{content.text}</Link>
                    </p>
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
