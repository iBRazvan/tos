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
            Obține o ofertă gratuită personalizată acum! Contactează-ne și
            descoperă soluțiile noastre adaptate nevoilor tale.
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
                <a
                  href="https://www.facebook.com/pardosealaconfortabila/?locale=ro_RO"
                  target="_blank"
                  className={`[&>svg]:hover:text-black w-full h-full flex justify-center items-center`}
                >
                  <FaFacebook className={`text-primary w-6 h-6`} />
                </a>
              </div>
              <div
                className={`w-8 h-8 p-0 m-0 items-center flex  justify-center ${styles.hoverIcon} `}
              >
                <a
                  href="https://wa.me/407"
                  target="_blank"
                  className={`[&>svg]:hover:text-black w-full h-full flex justify-center items-center`}
                >
                  <IoLogoWhatsapp className={`text-primary w-6 h-6`} />
                </a>
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
          <div className="xxs:max-w-[100%] lg:max-w-[85%]">
            <FormCTA />
          </div>
        </div>
      </section>
      {/* MAP */}
      <div className="flex justify-center w-full px-12 pb-12">
        <iframe
          title="Office Location"
          width="1280"
          height="450"
          style={{ border: 2 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.8942524227405!2d26.803385!3d46.25233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b506f7f7855555%3A0xb430d6775c6155eb!2sToderica%20Solutions!5e0!3m2!1sro!2sro!4v1706103034834!5m2!1sro!2sro"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen={true}
          className="test"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
