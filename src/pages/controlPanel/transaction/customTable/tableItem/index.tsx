import React from "react";
import edit from "assets/icons/edit.png";
import remove from "assets/icons/remove.png";
import { ITransaction } from "interfaces/transaction";
import { useDispatch } from "react-redux";
import { removeData, selectEditData } from "stores/transaction/actions";

import "./tableItem.scss";

interface IProps {
  tdItem: ITransaction;
  index: number;
}
const TableItem: React.FC<IProps> = ({ tdItem, index }) => {
  const dispatch = useDispatch();
  const getFormattedDate = (myDate: string) => {
    const date = new Date(myDate);
    let year = date.getFullYear();

    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    let day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return month + "." + day + "." + year;
  };
  const editTransaction = () => {
    dispatch(selectEditData(tdItem));
  };
  const removeTransaction = () => {
    if (window.confirm("Are you sure?")) dispatch(removeData(tdItem.id));
  };
  return (
    <tr className="tableItemContainer">
      <td>{index}</td>
      <td>{tdItem.name}</td>
      <td>{tdItem.description}</td>
      <td>{getFormattedDate(tdItem.date)}</td>
      <td>
        {tdItem.currency} {tdItem.amount}
      </td>

      <td>
        <img src={edit} alt="edit" onClick={editTransaction} />
        <img src={remove} alt="remove" onClick={removeTransaction} />
      </td>
    </tr>
  );
};

export default TableItem;
