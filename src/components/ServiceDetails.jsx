import React, { useState, useRef, useEffect } from "react";
import { serviceDetailedPage } from "../constants";
import { FaCheck } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import Redirect from "./redirect/Redirect";
import ServicesCarousel from "../components/servicesCarousel/servicesCarousel"
import styles from "../style";

const ServiceDetails = ({ selectedService }) => {
  const [expandedItem, setExpandedItem] = useState([]);

  const selectedServiceConstants = serviceDetailedPage.find(
    (service) => service.id === selectedService
  );

  const toggleItem = (itemId) => {
    setExpandedItem((prevItems) =>
      prevItems.includes(itemId)
        ? prevItems.filter((item) => item !== itemId)
        : [...prevItems, itemId]
    );
  };

  console.log(selectedServiceConstants.image)

  return (
    <div className="flex xxs:w-full h-fit sm:w-[67%] xxs:p-1 xs:p-4 xxs:pb-10">
      <div className={`flex flex-col xxs:px-6 md:p-6 w-full `}>
        <p className="border-t-4 border-l-4 pb-6 -ml-6 w-[110px] border-primary ">
          {"   "} <Redirect path="servicesdetail" />
        </p>
        <h3
          className={`text-5xl font-bebas text-secondary font-semibold leading-[1.2em]`}
        >
          {selectedServiceConstants.title}
        </h3>
        <h4 className={`text-lg font-roboto text-text font-semibold mb-4`}>
          {selectedServiceConstants.subtitle}
        </h4>

          <div
            className={`${styles.boxWidth} xxs:py-6 py-2 relative h-min flex justify-center flex-col`}
          >
            <ServicesCarousel imagesProps={selectedServiceConstants} />
          </div>

        {/* Prezentare generala */}
        <div className="flex flex-col py-6">
          <h4
            className={`text-4xl font-bebas text-secondary font-semibold leading-[1.2em] pb-6`}
          >
            Prezentare generala
          </h4>
          <p className="text-text text-base font-normal font-roboto">
            {selectedServiceConstants.overview}
          </p>
        </div>

        {/* Includem */}
        <div className="flex flex-col py-6">
          <h4
            className={`text-4xl font-bebas text-secondary font-semibold leading-[1.2em] pb-6`}
          >
            Includem
          </h4>

          <div className="w-full flex xxs:flex-col sm:flex-row xxs:gap-4 sm:gap-2 ">
            <div className="xxs:w-full sm:w-1/2 flex flex-col gap-4">
              {selectedServiceConstants.included.slice(0, 3).map((text, i) => (
                <div
                  key={i}
                  className="flex flex-row items-center text-primary gap-2"
                >
                  <div className="w-fit">
                    <FaCheck className="w-[18px] h-[18px]" />
                  </div>
                  <p className="text-text text-base font-normal font-roboto">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="xxs:w-full sm:w-1/2 flex flex-col gap-4">
              {selectedServiceConstants.included.slice(3, 6).map((text, i) => (
                <div
                  key={i}
                  className="flex flex-row items-center text-primary gap-2"
                >
                  <div className="w-fit">
                    <FaCheck className="w-[18px] h-[18px]" />
                  </div>
                  <p className="text-text text-base font-normal font-roboto">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Management */}
        <div className="flex flex-col py-6">
          <h4
            className={`text-4xl font-bebas text-secondary font-semibold leading-[1.2em] pb-6`}
          >
            Managementul constructiilor
          </h4>
          {/* List of items */}
          <div className="flex flex-col p-4 ">
            {selectedServiceConstants.constructionManagement.map((item, i) => (
              <div key={uuidv4()} className="flex flex-col h-full w-full">
                <div
                  className={`flex flex-row justify-between ${
                    expandedItem.includes(item.title) && "text-primary"
                  } text-2xl font-normal font-bebas cursor-pointer`}
                  onClick={() => toggleItem(item.title)}
                >
                  <h5>
                    0{++i}. {item.title}
                  </h5>

                  <FaPlus className=" w-4 h-4" />
                </div>

                <div
                  className={`border-b-2 mb-6 overflow-hidden transition-all duration-2000  ${
                    expandedItem.includes(item.title) ? "max-h-20" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 bg-grayFruit">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
