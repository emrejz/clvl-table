import React from "react";
import Header from "./header";
import NavLeft from "./navLeft";
import Transaction from "./transaction";
import windowSize from "helpers/windowSize";

import "./controlPanel.scss";

const ControlPanel = () => {
  const { width } = windowSize();
  return (
    <div className="controlPanelContainer">
      <Header />
      <div className="content">
        {width && width > 800 && <NavLeft />}
        <Transaction />
      </div>
    </div>
  );
};

export default ControlPanel;
