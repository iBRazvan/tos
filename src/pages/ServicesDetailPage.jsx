import React, { useState, useEffect } from "react";
import { Banner, Footer } from "../components";
import { bannerConstants } from "../constants";
import { serviceDetailItems } from "../constants";
import { FaLongArrowAltRight } from "react-icons/fa";

import ServiceDetails from "../components/ServiceDetails";
import ServiceItem from "../components/servicesComponents/ServiceItem";
import Brochure from "../components/servicesComponents/Brochure";

import styles from "../style";
import { contact } from "../assets";
import { Link } from "react-router-dom";

const ServicesDetailPage = () => {
  const [data, setData] = useState();
  const [selectedServiceID, setSelectedServiceID] = useState("constructii");

  useEffect(() => {
    const servicesDetailConstants = bannerConstants.find(
      (item) => item.id === "servicesdetalied"
    );
    setData(servicesDetailConstants);
  }, []);

  const handleServiceClick = (id) => {
    setSelectedServiceID(id);
  };

  return (
    <div className={`flex flex-col items-center`}>
      <Banner servicesDetailConstants={data} />

      <div
        className={`flex xxs:flex-col sm:flex-row py-20 xxs:p-1 xs:p-4 ${styles.boxWidth}`}
      >
        <div className="xxs:w-full sm:w-1/3 p-4 xxs:py-10">
          <div className="flex flex-col gap-2">
            {serviceDetailItems.map((serviceItem) => (
              <ServiceItem
                key={serviceItem.id}
                id={serviceItem.id}
                title={serviceItem.title}
                selected={selectedServiceID === serviceItem.id}
                onClick={handleServiceClick}
              />
            ))}
            <div>
              <Brochure />
            </div>
            <div
              className={`w-[100%] flex py-4 mt-10 px-4 justify-center items-center bg-grayFruit text-secondary`}
            >
              <div className={`flex w-[90%] justify-center text-start`}>
                <div className="flex flex-col justify-center items-center">
                  <img src={contact} />
                  <h4
                    className={`text-4xl mt-4 font-bebas text-secondary font-semibold leading-[1.2em] pb-6`}
                  >
                    Cere oferta
                  </h4>

                  <div className="flex flex-col">
                    <p className="text-text text-roboto text-base mb-6">
                    Obține o ofertă gratuită personalizată acum!
                    </p>
                    <div className="flex items-center justify-center">
                      <Link to="/contact">
                        <button
                          className={`${styles.btn} w-fit flex flex-row items-start justify-start`}
                        >
                          Contactează-ne
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ServiceDetails selectedService={selectedServiceID} />
      </div>

      <Footer />
    </div>
  );
};

export default ServicesDetailPage;
