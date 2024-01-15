import React, { useEffect, useState } from "react";
import styles from "../../style";
// import styles, { layout } from "../style";

const Card = ({ service, cardType, project }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    cardType === "service"
      ? (setTitle(service?.title || ""), setContent(service?.content || ""))
      : (setTitle(project?.title || ""), setContent(project?.content || ""));
  }, [cardType, service, project]);

  const cardWidths = {
    service: styles.serviceImage,
    project: styles.projectImage,
  };
  const cardTitles = {
    service: styles.servicesTitle,
    project: styles.projectTitle,
  };
  const cardContents = {
    service: styles.servicesContent,
    project: styles.projectContent,
  };

  const cardWidth = cardWidths[cardType];
  const cardTitle = cardTitles[cardType];
  const cardContent = cardContents[cardType];

  return (
    <section className={`${cardWidth} h-full flex flex-col  pb-8 `}>
      {/* img */}
      <div className="w-full h-full mb-4">
        <img
          className="w-full h-full"
          src={cardType === "service" ? service.image : project.image}
          alt={title}
        />
      </div>
      <h4 className={`${cardTitle}`}>{title}</h4>
      <div>
        <p className={`${cardContent}`}>{content} </p>
      </div>
    </section>
  );
};

export default Card;
