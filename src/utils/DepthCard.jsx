import React from "react";
import { motion, useAnimation } from "framer-motion";

export const DepthCard = ({ children, width = "auto" }) => {

  const mainControls = useAnimation();

  return (
    <div  style={{ width, overflow: "hidden"}}>
      <motion.div
        whileHover={{scale: 1.1, zIndex: 10, width: "400px", height: "auto", position: "absolute"}}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    
    </div>
  );
};
