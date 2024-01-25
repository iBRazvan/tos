import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

import { navLinks } from "../constants";
import { toslogo } from "../assets";
import styles from "../style";
import { get } from "jquery";

const Navbar = () => {
  const [initialized, setInitialized] = useState(false);
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activatedNavLink") || "Acasa"
  );
  const [activeSublink, setActiveSublink] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = () => {
      const getRoute =
        navLinks.find((link) => link.route === location.pathname) ||
        (navLinks.find((link) => link.id === "nav-3")?.subLinks || []).find(
          (link) => link.route === location.pathname
        );

      (getRoute && location.pathname.startsWith(getRoute.route)) ||
      location.pathname === ""
        ? (setActiveLink(getRoute.title),
          setActiveSublink(getRoute.id),
          setShowDropdown(false),
          setToggle(false),
          localStorage.setItem("activeDropdownSublink", getRoute.id))
        : null;
    };

    handleRouteChange();

    if (!initialized) {
      handleRouteChange();
      setInitialized(true);
    }
  }, [location, navLinks, initialized]);

  const handleNavLinkClick = (e, nav) => {
    e.preventDefault();
    setActiveLink(nav.title);
    setShowDropdown(nav.title === "Servicii" && !showDropdown);
    setToggle(false);

    localStorage.setItem("activatedNavLink", nav.title);
  };

  const renderDropDown = () => (
    <div
      className={`${toggle ? "dropdown-mobile" : "dropdown"} ${
        showDropdown ? "show-dropdown" : ""
      }`}
    >
      {navLinks
        .find((nav) => nav.id === "nav-3")

        ?.subLinks.map((subLink) => (
          <div key={subLink.id}>
            <Link
              className={`dropdown-item  ${
                activeSublink === subLink.id ? "selected" : "text-white"
              } `}
              onClick={() => setShowDropdown(false) && setShowDropdown(false)}
              to={subLink.route}
            >
              {subLink.title}
            </Link>
          </div>
        ))}
    </div>
  );

  return (
    <div className={`w-screen flex flex-col`}>
      {/* Top Navigation */}
      <nav
        className={`w-full flex flex-row justify-center items-center bg-primary py-4`}
      >
        <div
          className={`${styles.containerWidth} ${styles.maxWidthBottomNav} ${styles.paddingX} flex xxs:flex-col xxs:items-center xxs:gap-1 700:flex-row justify-between`}
        >
          <div
            className={`xxs:flex-col xxs:gap-0 xs:gap-2 ss:flex-row ss:gap-5 flex text-white items-center`}
          >
            <div className={`flex flex-row items-center gap-2`}>
              <IoCall className={`text-white w-4 h-4`} />
              <span className={`flex flex-row items-center gap-2`}>
                Suna la: 0712345678
              </span>
            </div>
            <div className={`flex flex-row items-center gap-2`}>
              <MdEmail className={`text-white w-4 h-4`} />
              <a
                href="mailto:your-email@example.com"
                className="text-white text-base font-roboto"
              >
                toderica.solutions@gmail.com
              </a>
            </div>
          </div>
          <div className={`flex gap-5 relative`}>
            <div
              className={`w-8 h-8 p-0 m-0 items-center flex justify-center ${styles.hoverIcon}`}
            >
              <a
                href="https://www.facebook.com/pardosealaconfortabila/?locale=ro_RO"
                target="_blank"
                className={`[&>svg]:hover:text-black w-full h-full flex justify-center items-center`}
              >
                <FaFacebook className={`text-white w-4 h-4`} />
              </a>
            </div>
            <div
              className={`w-8 h-8 p-0 m-0 items-center flex  justify-center ${styles.hoverIcon}`}
            >
              <a
                href="https://wa.me/407"
                target="_blank"
                className={`[&>svg]:hover:text-black w-full h-full flex justify-center items-center`}
              >
                <IoLogoWhatsapp className={`text-white w-4 h-4`} />
              </a>
            </div>
            <div
              className={`w-8 h-8 p-0 m-0 items-center flex  justify-center ${styles.hoverIcon}`}
            >
              <FaLinkedin className={`text-white w-4 h-4`} />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Navigation */}
      <nav
        className={`w-full flex flex-row items-center justify-center bg-secondary text-white relative`}
      >
        <div
          className={`${styles.containerWidth} ${styles.paddingX} flex justify-between items-center py-4`}
        >
          <div className={`${styles.flexCenter}`}>
            <img
              src={toslogo}
              alt="tos"
              className="xxs:w-[72px] xxs:h-[62px] xs:w-[92px] xs:h-[80px] m-0 p-0"
            />
            <div className="flex items-start">
              <Link
                to="/"
                onClick={() => setActiveLink("Acasa")}
                className={`${styles.title}`}
              >
                Toderica
              </Link>
              <Link
                to="/"
                onClick={() => setActiveLink("Acasa")}
                className={`${styles.title} text-primary`}
              >
                Solutions
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`relative font-bebas text-[18px] font-medium leading-[1.2rem] uppercase after::content-[' '] after::bg-pink-500 after::h-[3px] aflter:w-[100%] after::absolute group cursor-pointer ${
                  activeLink === nav.title ? "text-primary" : "text-white"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={(e) => handleNavLinkClick(e, nav)}
              >
                {nav.title !== "Servicii" ? (
                  <Link to={`${nav.route}`}>{nav.title}</Link>
                ) : (
                  <span>{nav.title}</span>
                )}
                {nav.title === "Servicii" && renderDropDown()}
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <div className={`sm:hidden flex flex-1 justify-end items-center`}>
            {toggle ? (
              <IoMdClose
                className={`xxs:w-[22px] xxs:h-[22px] xs:w-[28px] xs:h-[28px] object-contain`}
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <GiHamburgerMenu
                className={`xxs:w-[22px] xxs:h-[22px] xs:w-[28px] xs:h-[28px] object-contain`}
                onClick={() => setToggle(!toggle)}
              />
            )}

            <div
              className={`${
                toggle
                  ? "translate-x-0 transition-all ease-out duration-1000"
                  : "-translate-x-full transition-all ease-out duration-1000"
              } p-6 bg-secondary absolute -left-6 xxs:top-20 xs:top-24 mx-4 my-2 min-w-[260px] h-screen rounded-xl z-20 flex flex-wrap flex-col`}
            >
              <ul className="list-none flex items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`relative font-bebas font-medium leading-[1.2rem] uppercase after::content-[' '] after::bg-pink-500 after::h-[3px] aflter:w-[100%] after::absolute cursor-pointer text-[16px] ${
                      activeLink === nav.title ? "text-primary" : "text-white"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={(e) => handleNavLinkClick(e, nav)}
                  >
                    {nav.id !== "nav-3" ? (
                      <Link
                        to={nav.route}
                        className={`${
                          activeLink === nav.title
                            ? "text-primary"
                            : "text-white"
                        }`}
                      >
                        {nav.title}
                      </Link>
                    ) : (
                      <span>{nav.title}</span>
                    )}
                    {nav.title === "Servicii" && renderDropDown()}
                  </li>
                ))}
              </ul>
              <div className={`flex`}>
                <h1 className={`${styles.title}`}>Toderica</h1>
                <h1 className={`${styles.title} text-primary`}>Solutions</h1>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
