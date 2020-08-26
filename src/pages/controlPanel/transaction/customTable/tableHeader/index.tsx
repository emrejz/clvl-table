import React from "react";

import "./tableHeader.scss";

const thList = ["ID", "Name", "Description", "Transaction Date", "Amount"];
const TableHeader = () => {
  return (
    <thead>
      <tr>
        {thList.map((item, index) => (
          <th key={index}>{item}</th>
        ))}
        <th className="actionBox"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
