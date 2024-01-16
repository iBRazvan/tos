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
    service: styles.serviceWidth,
    project: styles.projectWidth,
   
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
    <section className={`${cardWidth} h-full flex flex-col pb-8 `}>
      {/* img */}
      <div className="w-full h-full mb-4">
        <img
          className="w-full h-full"
          src={cardType === "service" ? service.image : project.image}
          alt={title}
        />
      </div>
      <div className="flex flex-row">
        <div className="flex justify-end items-end">
         
        {cardType !== "service" && <p className=" text border-b-[1px] h-[18%] border-r-[1px] w-[40px] mb-[6px] border-primary ">
            {"   "}{" "}
        </p> }
         
        </div>
      <div className={` ${cardType === "project" && "ml-5"}`}>
        <h4 className={`${cardTitle} ${cardType === "team" && "text-primary"}`}>{title}</h4>
        <p className={`${cardContent} b`}>{content} </p>
      </div>
      </div>
    </section>
  );
};

export default Card;
