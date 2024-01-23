import React, { useState, useEffect } from "react";
import styles, { layout } from "../style";
import { bannerConstants } from "../constants";
import { bgph2 } from "../assets";

const Banner = ({
  aboutConstants,
  servicesConstants,
  servicesDetailConstants,
  contactConstants,
}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(
      aboutConstants
        ? aboutConstants
        : servicesConstants
        ? servicesConstants
        : servicesDetailConstants
        ? servicesDetailConstants
        : contactConstants
    );
  }, [
    aboutConstants,
    servicesConstants,
    servicesDetailConstants,
    contactConstants,
  ]);

  return (
    <section
      className={`relative flex w-screen items-center justify-center h-fit min-h-[280px] xxs:px-2 mobile:px-6`}
      style={{
        backgroundImage: `url(${bgph2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`${styles.opacity} opacity-50 brightness-[90%] shadow-xl bg-black`}
        style={{ zIndex: 0 }}
      ></div>
      <div
        className={`${styles.boxWidth} xxs:py-6 relative flex xxs:flex-col sm:flex-row`}
      >
        <div className="xxs:w-fit sm:w-1/2 ">
          <p className="border-t-4 border-l-4 pb-6 w-[110px] border-white">
            {"   "}{" "}
          </p>

          <h1 className={`left-8 font-semibold text-5xl font-bebas uppercase text-white pl-6`}>
            {data?.title.split(" ").map((word, index, array) => (
              <span
                key={index}
                className={
                  index === 0
                    ? "text-white"
                    : index === array.length - 1
                    ? "text-primary"
                    : "text-white"
                }
              >
                {word} {index < array.length - 1 && " "}
              </span>
            ))}
          </h1>
          <p
            className={`font-roboto text-base pt-2 pl-6 text text-white font-[500]`}
          >
            {data?.path.split(" ").map((word, index, array) => (
              <span
                key={index}
                className={index === 0 ? "text-white" : "text-primary"}
              >
                {word}{" "}
                {index === 0 && array.length > 1 && (
                  <span className="text-white">/</span>
                )}
                {index < array.length - 1 && " "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
