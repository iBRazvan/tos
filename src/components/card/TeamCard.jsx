import React from "react";

const TeamCard = ({ team }) => {
 
  return (
    <section className={`max-w-[374px] text-start h-full flex flex-col pb-8 `}>
      {/* img */}
      <div className="w-full h-full mb-4">
        <img className="w-full h-full" src={team.image} alt={team.title} />
      </div>
      <div className="flex flex-row">
        <div className="flex justify-end items-end">
          <p className=" text border-b-[1px] h-[18%] border-r-[1px] w-[40px] mb-[6px] border-primary ">
            {"   "}{" "}
          </p>
        </div>
        <div className={` ml-5`}>
          <h4 className="text-primary font-poppins text-xl">{team.title}</h4>
          <p className="text-text font-poppins text-sm">{team.content} </p>
        </div>
      </div>
    </section>
  );
};

export default TeamCard;
