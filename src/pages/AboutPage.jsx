import React, { useState, useEffect } from "react";

import Banner from "../components/Banner";
import AboutTestimonials from "../components/aboutComponents/AboutTestimonials";
import StatsBanner from "../components/aboutComponents/StatsBanner";
import CertificationBanner from "../components/aboutComponents/CertificationBanner";
import { Footer, Team } from "../components";
import { bannerConstants } from "../constants";

const AboutPage = () => {

  return (
    <div className="flex flex-col items-center">
      <Banner aboutConstants={bannerConstants.find((item) => item.id === "about")} />
      <AboutTestimonials />
      <StatsBanner />
      <Team />
      <CertificationBanner />
      <Footer />
    </div>
  );
};

export default AboutPage;
