import React from "react";
import styles from "../style";
import { projectsConstants } from "../constants";

import Card from "./card/Card";

const Projects = (ref) => {
  return (
    <section
      id="projects"
      className={`${styles.xyFull} ${styles.flexCol} ${styles.flexCenter} bg-secondary py-20 px-6`}
    >
      <div
        className={`${styles.boxWidth} ${styles.flexCol} mb-20 xxs:px-2 mobile:px-6`}
      >
        <div className="w-fit pb-11 ">
          <p className="border-t-4 border-l-4 pb-6 -ml-6 w-[110px] border-primary">
            {"   "}{" "}
          </p>

          <h1
            className={`left-8 font-semibold text-5xl font-bebas uppercase text-primary`}
          >
            Proiectele noastre
          </h1>
          <p className={`font-roboto font-semibold text-base pt-2 text-white`}>
            Proiecte ce depășesc așteptările de fiecare dată.
          </p>
        </div>
        <div
          className={`${styles.boxWidth} ${styles.flexCenter} ${styles.flexCol}`}
        >
          <div className={`${styles.gridCols}`}>
            {projectsConstants.map((project) => (
              <Card key={project.id} project={project} cardType="project" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
