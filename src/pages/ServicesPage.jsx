import React,{useState, useEffect} from "react";
import {Banner, ServicesComponent ,Footer} from "../components"
import { bannerConstants } from "../constants";


const ServicesPage = () => {

  return (
    <div className="flex flex-col items-center">
      <Banner servicesConstants={bannerConstants.find((item) => item.id === 'services')}/>
      <ServicesComponent />
      <Footer />
    </div>
  );
};

export default ServicesPage;
