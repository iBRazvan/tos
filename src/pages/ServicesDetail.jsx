import React, { useState, useEffect } from "react";
import { Banner, Footer } from "../components";
import { bannerConstants } from "../constants";
import styles from "../style";
import { r1 } from "../assets";

const ServicesDetail = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const servicesDetailConstants = bannerConstants.find(
      (item) => item.id === "servicesdetalied"
    );
    setData(servicesDetailConstants);
  }, []);

  return (
    <div className={` flex flex-col items-center`}>
      <Banner servicesDetailConstants={data} />

     
        <div className={`flex flex-row ${styles.boxWidth}`}>
          
          <div className="w-1/3">
            <div className="w-full bg-slate-400 ">
              <h2>A</h2>
              <h2>A</h2>
              <h2>A</h2>
              <h2>A</h2>
              <h2>A</h2>
              <h2>A</h2>
            </div>
          </div>
          <div className=" flex flex-1">
            <div className={`${styles.colContainer} `}>
              <p className="border-t-4 border-l-4 pb-6 -ml-6 w-[110px] border-primary ">
                {"   "}{" "}
              </p>
              <h3
                className={`text-5xl font-bebas text-secondary font-semibold leading-[1.2em]`}
              >
                Recenzii
              </h3>
              <h4
                className={`text-lg font-poppins text-primary font-semibold mb-4`}
              >
                Ce spun clientii despre noi?
              </h4>
              <div className="pt-2 "></div>
              <div
                className={`${styles.cellQuery} ${styles.statsCellContainer}`}
              >
                <p className={`${styles.paragraph} font-semibold`}>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illo illum totam id quas aperiam saepe molestiae! Pariatur
                  ratione hic, consequatur inventore dolor quibusdam unde,
                  ducimus, recusandae nemo illo consectetur earum."
                </p>
              </div>
              <div className="flex flex-row items-center ">
                <div className="flex rounded-full w-20 h-20 border-2 border-primary  ">
                  <img src={r1} className="border-primary rounded-full" />
                </div>

                <div className="pl-6">
                  <h2 className="font-bebas text-primary text-2xl ">
                    Cristian
                  </h2>{" "}
                  <p className="font-poppins text-text font-normal ">Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      <Footer />
    </div>
  );
};

export default ServicesDetail;
