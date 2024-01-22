import React from "react";
import styles from "../style";

import {
  Hero,
  CTA,
  Footer,
  Projects,
  ServicesComponent,
  ServicesBanner,
  Stats,
  Team,
  Testimonials,
  TestimonialsBanner,
} from "../components";
import HomeBanner from "../components/HomeBanner";

const HomePage = () => {



  return (
    <div className="bg-white overflow-hidden">
      <div className={`${styles.flexCenter} `}>
        <Hero />
      </div>

      <div className={`bg-white ${styles.flexCenter} pb-[9rem] `}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
        </div>
      </div>
      <ServicesBanner />
      <div className={`bg-white ${styles.flexCenter} ${styles.flexCol} `}>
        <ServicesComponent />
        <Projects/>
        <Team />
        <HomeBanner />
        <Testimonials />
        <TestimonialsBanner />
        <CTA />
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
