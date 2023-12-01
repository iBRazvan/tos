import React from "react";
import styles from "../style";

import { navLinks } from "../constants";

import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

import { toslogo } from "../assets";

const Navbar = () => {
  return (
    <div className="w-screen flex flex-col">
      <nav
        className={`w-full bg-primary flex py-4 justify-between items-center ${styles.maxWidthBottomNav} ${styles.paddingX} `}
      >
        <div className="flex flex-row gap-5 text-white items-center">
          <div className="flex flex-row items-center gap-2">
            <IoCall className={` ${styles.navIcon}`} />
            <span className=" text-base font-normal ">Suna la: 0712345678</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <MdEmail className={` ${styles.navIcon}`} />
            <p className="text-base font-normal">
              Email: todericasolutions@gmail.com
            </p>
          </div>
        </div>
        <div className="flex gap-5 relative">
          <div className={`${styles.navContainer} ${styles.hoverIcon} `}>
            <FaFacebook className={`${styles.navIcon}`} />
          </div>
          <div className={`${styles.navContainer} ${styles.hoverIcon} `}>
            <IoLogoWhatsapp className={` ${styles.navIcon}`} />
          </div>
          <div className={`${styles.navContainer} ${styles.hoverIcon} `}>
            <FaLinkedin className={` ${styles.navIcon} hover:text-black  `} />
          </div>
        </div>
      </nav>
      <nav
        className={`w-full flex justify-between items-center bg-secondary text-white ${styles.paddingX} py-4 `}
      >
        <div className="flex flex-row items-center">
          <img src={toslogo} alt="tos" className="w-[92px] h-[80px] m-0 p-0" />
          <h1 className={`${styles.title}`}>Toderica</h1>
          <h1 className={`${styles.title} text-primary`}>Solutions</h1>
        </div>

        <ul className="list-none sm:flex hidden justify-end items-center gap-5 py-5">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`${styles.navLinksTransition} font-bebas text-[18px] font-medium leading-[1.2rem] uppercase`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
