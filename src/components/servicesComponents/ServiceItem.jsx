import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ServiceItem = ({ id, title, selected, onClick }) => (
    <div
      className={`w-[100%] flex py-4 px-8 justify-center items-center service-item ${
        selected ? "selectedItem" : "bg-grayFruit text-secondary"
      }`}
      onClick={() => onClick(id)}
    >
      <div className={`flex w-[90%] justify-center text-center`}>
        <div className="flex justify-center">
          <h2 className="text-lg font-roboto font-semibold">{title}</h2>
        </div>
      </div>
      <div className="flex w-[10%] justify-center">
        <FaLongArrowAltRight />
      </div>
    </div>
  );

  export default ServiceItem