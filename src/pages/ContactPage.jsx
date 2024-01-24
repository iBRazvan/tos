import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { bannerConstants, footerConstants } from "../constants";
import { Footer, Banner } from "../components";
import FormCTA from "../components/formCTA'/FormCTA";

import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import styles from "../style";
import Redirect from "../components/redirect/Redirect";

const ContactPage = () => {
  const [data, setData] = useState();
  const [contactLeftSideConstants, setContactLeftSideConstants] = useState([]);

  useEffect(() => {
    const contactConstants = bannerConstants.find(
      (item) => item.id === "contact"
    );
    setData(contactConstants);

    const leftSideConstants = footerConstants.find(
      (item) => item.id === "footercol-1"
    );

    setContactLeftSideConstants(leftSideConstants.content);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Redirect />
      <Banner contactConstants={data} />
      {/* Contact content */}
      <section
        className={`${styles.boxWidth} flex xxs:flex-col sm:flex-row xxs:py-10 sm:py-20 xxs:px-8 sm:px-12`}
      >
        {/* Left side section */}
        <div className="xxs:w-full md:w-1/3 xxs:p-2 sm:p-4 xxs:py-10">
          <p className="border-t-4 border-l-4 pb-6 -ml-6 w-[110px] border-primary ">
            {"   "}{" "}
          </p>
          <h3
            className={`text-5xl font-bebas text-secondary font-semibold leading-[1.2em] mb-4`}
          >
            Contacteaza-ne
          </h3>
          <h4
            className={`text-lg font-roboto text-primary font-semibold mb-10`}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h4>

          <div className="flex flex-col gap-4">
            {/* Contact info's */}
            {contactLeftSideConstants &&
              contactLeftSideConstants.map((item) => (
                <div key={uuidv4()} className="flex flex-col">
                  <div className="flex flex-row items-center gap-2">
                    {<item.icon className="text-primary w-6 h-6" />}
                    <p className="text-text text-base font-roboto">
                      <Link to={item.to}>{item.text}</Link>
                    </p>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex flex-col my-12">
            <h4 className=" text-2xl font-bebas">Urmareste-ne</h4>
            <div className={`flex flex-row gap-5 items-start pt-4`}>
              <div
                className={`w-8 h-8 p-0 m-0 items-center flex  justify-center ${styles.hoverIcon}`}
              >
                <FaFacebook className={`w-6 h-6 text-primary`} />
              </div>
              <div
                className={`w-8 h-8 p-0 m-0 items-center flex  justify-center ${styles.hoverIcon} `}
              >
                <IoLogoWhatsapp className={`w-6 h-6 text-primary`} />
              </div>
              <div
                className={`w-8 h-8 p-0 m-0 items-center flex  justify-center ${styles.hoverIcon} `}
              >
                <FaLinkedin className={`w-6 h-6 text-primary`} />
              </div>
            </div>
          </div>
        </div>

        {/* Right side content section */}
        <div className="flex flex-col xxs:w-full md:w-[67%] xxs:p-1 xs:p-4 xxs:pb-10">
          <div className=" max-w-[75%]">
            <FormCTA />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
