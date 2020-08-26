import { initEditData } from "constants/initData";
import { ITransaction } from "interfaces/transaction";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addData,
  changeEditData,
  selectEditData,
} from "stores/transaction/actions";

import "./modal.scss";

interface IProps {
  switchModal: (bol: boolean) => void;
  data: ITransaction;
}

const CustomModal: React.FC<IProps> = ({ switchModal, data }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("2020-01-01");
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("TRY");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const { id, name, description, date, amount, currency } = data;
    if (id > 0) {
      setId(id);
      setName(name);
      setDescription(description);
      setAmount(amount);
      setCurrency(currency);
      setDate(date);
    }
  }, [data]);
  const addTransaction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && description && amount && currency && date) {
      if (id > 0) {
        dispatch(
          changeEditData({
            id,
            name,
            description,
            amount,
            currency,
            date,
          })
        );
      } else {
        dispatch(
          addData({
            id: Math.floor(Math.random() * 100000),
            name,
            description,
            amount,
            currency,
            date,
          })
        );
      }
      setError("");
      switchModal(false);
    } else {
      setError("ops invalid field(s)");
    }
  };

  const cancelFunc = () => {
    switchModal(false);
    dispatch(selectEditData(initEditData));
  };
  return (
    <div className="transactionModal">
      <form onSubmit={(e) => addTransaction(e)} className="modalForm">
        <div>
          <label>Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            type="number"
            min="0"
          />
        </div>
        <div>
          <label>Currency:</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
        <div>
          <button type="submit">{data.id > 0 ? "edit" : "add"}</button>
          <button onClick={cancelFunc}>cancel</button>
        </div>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};
export default CustomModal;
