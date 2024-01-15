import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center py-20 gap--20">
      <p> ABOUT P</p>
      <Link to={"/services"}>Clickkk</Link>
    </div>
  );
};

export default About;
