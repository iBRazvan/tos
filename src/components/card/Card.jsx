import React from "react";
import styles from "../../style";
// import styles, { layout } from "../style";

const Card = ({ service: { image, title, content } }) => {
  console.log(title);
  return (
    <section className="w-auto h-full flex flex-col items-center text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
      {/* img */}
      <div className="w-full h-full">
        <img className="w-full h-full mb-4" src={image} />
      </div>
      <h4 className={`text-black font-bebas font-semibold text-4xl mt-2 mb-4`}>
        {title}
      </h4>
      <div>
        <p className={styles.statsParagraph}>{content}</p>
      </div>
    </section>
  );
};

export default Card;
