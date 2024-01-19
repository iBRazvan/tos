import React from "react";
import styles from "../style";

import {
  Hero,
  Banner,
  CTA,
  Footer,
  Projects,
  Services,
  ServicesBanner,
  Stats,
  Team,
  Testimonials,
  TestimonialsBanner,
} from "../components";
import HomeBanner from "../components/HomeBanner";

const Home = () => {



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
        <Services />
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

export default Home;
