import React, { useState, useEffect } from "react";
import { Banner, Footer } from "../components";
import { bannerConstants } from "../constants";
import { FaLongArrowAltRight } from "react-icons/fa";
import { serviceDetailItems } from "../constants";
import ServiceDetails from "../components/ServiceDetails";
import styles from "../style";

const ServiceItem = ({ id, title, selected, onClick }) => (
  <div
    className={`w-[100%] flex py-4 px-8 justify-center items-center service-item ${
      selected ? "selectedItem" : "bg-grayFruit text-secondary"
    }`}
    onClick={() => onClick(id)}
  >
    <div
      className={`flex w-[90%] justify-center text-center`}
    >
      <div className="flex justify-center">
        <h2 className="text-lg font-roboto font-semibold">{title}</h2>
      </div>
    </div>
    <div className="flex w-[10%] justify-center">
      <FaLongArrowAltRight />
    </div>
  </div>
);


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
    <div className={` flex flex-col items-center`}>
      <Banner servicesDetailConstants={data} />

      <div className={`flex flex-row py-20 px-4 ${styles.boxWidth}`}>
        <div className="w-1/3 p-4">
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
          </div>
        </div>
        <ServiceDetails selectedService={selectedServiceID} />
      </div>

      <Footer />
    </div>
  );
};

export default ServicesDetailPage;
