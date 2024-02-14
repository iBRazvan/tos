import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";

import { Navbar } from "./components";
import styles from "./style";

export const App = () => {
  return (
    <div className="root">
      <div className="bg-white overflow-hidden">
        <div className={` ${styles.flexCenter}`}>
          <Navbar/>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
