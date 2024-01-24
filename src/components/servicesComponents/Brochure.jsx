import React from "react";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

const Brochure = () => (
  <div
    className={`w-[100%] flex py-4 mt-10 px-4 justify-center items-center bg-grayFruit text-secondary"
      }`}
  >
    <div className={`flex w-[90%] justify-center text-start `}>
      <div className="flex flex-col justify-center">
        <h4
          className={`text-4xl font-bebas text-secondary font-semibold leading-[1.2em] pb-6`}
        >
          Descarca:
        </h4>
        <div className="w-full flex xxs:flex-col sm:flex-row items-start pb-6">
          <div className=" mr-2 xxs:mb-4 sm:mb-0 ">
            <BsFileEarmarkPdfFill className="text-primary w-9 h-9" />
          </div>
          <div className="flex flex-col">
            <h5 className=" text-2xl font-bebas ">Brosura CV</h5>
            <p className=" text-base text-text font-roboto">
              Descarcă acum broșura noastră CV pentru a descoperi gama noastră
              completă de servicii și realizări remarcabile în domeniul
              construcțiilor.
            </p>
          </div>
        </div>
        <div className="w-full flex xxs:flex-col sm:flex-row items-start pb-6">
          <div className=" mr-2 xxs:mb-4 sm:mb-0 ">
            <BsFileEarmarkPdfFill className="text-primary w-9 h-9" />
          </div>
          <div className="flex flex-col">
            <h5 className=" text-2xl font-bebas ">Portofoliu cu proiecte</h5>
            <p className=" text-base text-text font-roboto">
              Explorați realizările noastre - descărcați portofoliul cu proiecte
              de excepție!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Brochure;
