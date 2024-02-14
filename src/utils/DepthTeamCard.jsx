import React from "react";
import { motion, useAnimation } from "framer-motion";

export const DepthTeamCard = ({ children, width = "auto" }) => {

  const mainControls = useAnimation();

  return (
    <div  style={{ width, overflow: "hidden"}}>
      <motion.div
        whileHover={{scale: 1.1, zIndex: 100, width: "300px", height: "auto", position: "absolute",}}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    
    </div>
  );
};
