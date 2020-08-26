import React from "react";
import TableHeader from "./tableHeader";
import TableItem from "./tableItem";
import { useSelector } from "react-redux";
import { IAppState } from "interfaces/transaction";

import "./customTable.scss";

const CustomTable = () => {
  const list = useSelector((state: IAppState) => state.transaction.data);

  return (
    <div className="customTableContainer">
      <table>
        <TableHeader />
        <tbody>
          {list.map((item, index) => (
            <TableItem tdItem={item} key={index} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
