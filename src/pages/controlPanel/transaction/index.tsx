import React, { useEffect, useState } from "react";
import CustomTable from "./customTable";
import CustomModal from "./customModal";
import { useSelector } from "react-redux";
import { IAppState, ITransaction } from "interfaces/transaction";
import { initEditData } from "constants/initData";

import "./transaction.scss";

const Transaction = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState<ITransaction>(initEditData);
  const switchModal = (bol: boolean) => setModal(bol);
  const editData = useSelector(
    (state: IAppState) => state.transaction.editData
  );
  useEffect(() => {
    if (editData.id > 0) {
      setData(editData);
      switchModal(true);
    } else {
      setData(editData);
    }
  }, [editData]);
  return (
    <div className="transactionContainer">
      <div className="content">
        <button onClick={() => switchModal(true)}>+ New Transaction</button>
        <CustomTable />
        {modal && <CustomModal switchModal={switchModal} data={data} />}
      </div>
    </div>
  );
};

export default Transaction;
