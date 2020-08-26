import React from "react";

import "./navLeftItem.scss";
interface IProps {
  item: String;
  active: boolean;
}
const NavLeftItem: React.FC<IProps> = ({ item, active }) => {
  return (
    <button
      className={
        active ? "navLeftItemContainer active" : "navLeftItemContainer"
      }
    >
      {item}
    </button>
  );
};

export default NavLeftItem;
