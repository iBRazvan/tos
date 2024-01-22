import React, {useState, useEffect} from "react";

import Banner from "../components/Banner";
import AboutTestimonials from "../components/aboutComponents/AboutTestimonials";
import StatsBanner from "../components/aboutComponents/StatsBanner";
import { Footer, Team } from "../components";
import { bannerConstants } from "../constants";

const AboutPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const aboutConstants = bannerConstants.find((item) => item.id === 'about');
    setData(aboutConstants);
  }, []); 

  console.log("about", data);

  return (
    <div className="flex flex-col items-center">
      <Banner aboutConstants={data}/>
      <AboutTestimonials/>
      <StatsBanner/>
      <Team/>
      <Footer/>
    </div>
  );
};

export default AboutPage;
