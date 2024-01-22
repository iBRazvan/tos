import React from "react";
import { serviceDetailedPage } from "../constants";
import styles from "../style";
import { FaCheck } from "react-icons/fa";

const ServiceDetails = ({ selectedService }) => {
  const selectedServiceConstants = serviceDetailedPage.find(
    (service) => service.id === selectedService
  );

  return (
    <div className="flex  w-[67%]">
      <div className={`flex flex-col xxs:px-6 md:p-6 w-full `}>
        <p className="border-t-4 border-l-4 pb-6 -ml-6 w-[110px] border-primary ">
          {"   "}{" "}
        </p>
        <h3
          className={`text-5xl font-bebas text-secondary font-semibold leading-[1.2em]`}
        >
          {selectedServiceConstants.title}
        </h3>
        <h4 className={`text-lg font-roboto text-text font-semibold mb-4`}>
          {selectedServiceConstants.subtitle}
        </h4>

        <div className={`flex flex-col py-2`}>
          <img src={selectedServiceConstants.image} />
        </div>
        <div className="flex flex-col py-2">
          <h4
            className={`text-4xl font-bebas text-secondary font-semibold leading-[1.2em] pb-6`}
          >
            Prezentare generala
          </h4>
          <p className="text-text text-base font-normal font-roboto">
            {selectedServiceConstants.overview}
          </p>
        </div>
        <div className="flex flex-col py-2">
          <h4
            className={`text-4xl font-bebas text-secondary font-semibold leading-[1.2em] pb-6`}
          >
            Includem
          </h4>

          <div className="w-full flex ">
            <div className="w-1/2 flex flex-col gap-4">
              {selectedServiceConstants.included.slice(0, 3).map((text) => (
                <div className="flex flex-row items-center text-primary gap-2">
                  <div className="w-fit">
                  <FaCheck className="w-[18px] h-[18px]" />
                    </div>
                  <p className="text-text text-base font-normal font-roboto">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              {selectedServiceConstants.included
                .slice(3, 6)
                .map(
                  (text) => (
                    <div className="flex flex-row items-center text-primary gap-2">
                  <div className="w-fit">
                  <FaCheck className="w-[18px] h-[18px]" />
                    </div>
                  <p className="text-text text-base font-normal font-roboto">
                    {text}
                  </p>
                </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
