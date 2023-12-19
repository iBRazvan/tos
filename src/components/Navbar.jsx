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
    <div className={`${styles.navContainer} `}>
      <nav className={` ${styles.navComponent} bg-primary py-4 `}>
        <div
          className={` ${styles.containerWidth}  ${styles.maxWidthBottomNav} ${styles.paddingX} ${styles.navQuery}`}
        >
          <div className={`${styles.navContentQuery}`}>
            <div className={`${styles.navInfo}`}>
              <IoCall className={` ${styles.navIcon}`} />
              <span className={`${styles.navInfoText}`}>
                Suna la: 0712345678
              </span>
            </div>
            <div className={`${styles.navInfo}`}>
              <MdEmail className={` ${styles.navIcon}`} />
              <p className={`${styles.navInfoText}`}>
                Email: todericasolutions@gmail.com
              </p>
            </div>
          </div>
          <div className={`${styles.navSocialContainer}`}>
            <div className={`${styles.navSocial} ${styles.hoverIcon} `}>
              <FaFacebook className={`${styles.navIcon}`} />
            </div>
            <div className={`${styles.navSocial} ${styles.hoverIcon} `}>
              <IoLogoWhatsapp className={` ${styles.navIcon}`} />
            </div>
            <div className={`${styles.navSocial} ${styles.hoverIcon} `}>
              <FaLinkedin className={` ${styles.navIcon}`} />
            </div>
          </div>
        </div>
      </nav>
      <nav className={`${styles.navComponent}  bg-secondary text-white`}>
        <div
          className={`${styles.containerWidth} ${styles.paddingX} flex justify-between items-center py-4 `}
        >
          <div className={`${styles.flexCenter}`}>
            <img
              src={toslogo}
              alt="tos"
              className="w-[92px] h-[80px] m-0 p-0"
            />
            <h1 className={`${styles.title}`}>Toderica</h1>
            <h1 className={`${styles.title} text-primary`}>Solutions</h1>
          </div>

          <ul className={`${styles.navLinksContaier}`}>
            {navLinks.map((nav) => (
              <li key={nav.id} className={`${styles.navLinks}`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
