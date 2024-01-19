import React from "react";

import Banner from "../components/Banner";
import styles, { layout } from "../style";
import { bgph2 } from "../assets";


import { r1, testimonial } from "../assets";
import { ImQuotesLeft } from "react-icons/im";
import AboutTestimonials from "../components/aboutComponents/AboutTestimonials";
import StatsBanner from "../components/aboutComponents/StatsBanner";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <Banner/>
      <AboutTestimonials/>
      <StatsBanner/>

    </div>
  );
};

export default About;
