import React from "react";
import styles from "./style";

import {
  Navbar,
  Hero,
  Banner,
  CTA,
  Footer,
  Projects,
  Services,
  Stats,
  Team,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div>
        <div className={` ${styles.flexCenter}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexCenter} `}>
        <Hero />
      </div>

      <div className={`bg-white ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Services />
          <Projects />
          <Team />
          <Banner />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
