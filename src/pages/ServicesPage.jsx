import React,{useState, useEffect} from "react";
import {Banner, ServicesComponent ,Footer} from "../components"
import { bannerConstants } from "../constants";


const ServicesPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const servicesConstants = bannerConstants.find((item) => item.id === 'services');
    setData(servicesConstants);
  }, []); 

  return (
    <div className="flex flex-col items-center">
      <Banner servicesConstants={data}/>
      <ServicesComponent />
      <Footer />
    </div>
  );
};

export default ServicesPage;
