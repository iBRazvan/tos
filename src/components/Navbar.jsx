import React, { useState } from "react";
import styles from "../style";

import { Link } from "react-router-dom";
import { navLinks } from "../constants";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

import { toslogo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

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
      <nav
        className={`${styles.navComponent}  bg-secondary text-white relative`}
      >
        <div
          className={`${styles.containerWidth} ${styles.paddingX} flex justify-between items-center py-4 `}
        >
          <div className={`${styles.flexCenter}`}>
            <img
              src={toslogo}
              alt="tos"
              className="xxs:w-[72px] xxs:h-[62px] xs:w-[92px] xs:h-[80px] m-0 p-0"
            />
            <div className="flex items-start">
              <h1 className={`${styles.title}`}>Toderica</h1>
              <h1 className={`${styles.title} text-primary`}>Solutions</h1>
            </div>
          </div>

          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`${styles.navLinks}   cursor-pointer ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`${nav.route}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>

          <div className={`${styles.navHamburgerMenu}`}>
            {toggle ? (
              <IoMdClose
                className={`${styles.navHamburgerMenuIcon}`}
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <GiHamburgerMenu
                className={`${styles.navHamburgerMenuIcon}`}
                onClick={() => setToggle(!toggle)}
              />
            )}

            <div
              className={`${
                toggle
                  ? "translate-x-0 transition-all ease-out duration-1000"
                  : "-translate-x-full transition-all ease-out duration-1000"
              } p-6 bg-secondary absolute -left-6 xxs:top-20 xs:top-24 mx-4 my-2 min-w-[260px] h-screen rounded-xl z-20 ju flex flex-wrap flex-col `}
            >
              <ul className="list-none flex items-start flex-1 flex-col">
                {navLinks.map(
                  (nav, index) => (
                    
                    (
                      <li
                        key={nav.id}
                        className={` ${
                          styles.navLinks
                        }  font-medium cursor-pointer text-[16px] ${
                          active === nav.title ? "text-primary" : "text-white"
                        } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                        onClick={() => setActive(nav.title)}
                      >
                        <Link to={`${nav.route}`}>{nav.title}</Link>
                      </li>
                    )
                  )
                )}
              </ul>
              <div className={`flex`}>
                <h1 className={`${styles.title}`}>Toderica</h1>
                <h1 className={`${styles.title} text-primary`}>Solutions</h1>
              </div>
            </div>
          </div>

          {/* <ul className={`${styles.navLinksContaier}`}>
            {navLinks.map((nav) => (
              <li key={nav.id} className={`${styles.navLinks}`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
