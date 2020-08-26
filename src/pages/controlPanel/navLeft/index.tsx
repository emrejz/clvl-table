import React, { useState } from "react";
import NavLeftItem from "./navLeftItem";

import "./navLeft.scss";

const data = ["Dashboard", "Transactions", "Accounts", "Settings"];
const NavLeft = () => {
  const [selected, setSelected] = useState("Transactions");
  return (
    <div className="navLeftContainer">
      {data.map((item, index) => (
        <NavLeftItem key={index} active={selected === item} item={item} />
      ))}
    </div>
  );
};

export default NavLeft;
