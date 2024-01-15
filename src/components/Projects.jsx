import React from "react";
import styles, { layout } from "../style";
import { projectsConstants } from "../constants";
import Card from "./card/Card";

const Projects = () => {
  return (
    <section
      className={`${styles.xyFull} ${styles.flexCol} ${styles.flexCenter} bg-secondary py-20 px-4`}
    >
      <div className={`${styles.boxWidth} ${styles.flexCol} mb-20 `}>
        <div className="w-fit pb-11 ">
          <p className="border-t-4 border-l-4 pb-6 left w-[30%] border-primary fonmt">
            {"   "}{" "}
          </p>

          <h1 className={`${styles.servicesHeader} text-primary pl-6`}>
            Proiectele noastre
          </h1>
          <p className={`${styles.servicesParagraph} font-semi`}>
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