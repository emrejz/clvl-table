import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ControlPanel from "pages/controlPanel";
import { fetchData } from "stores/transaction/actions";
import data from "constants/static.json";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) dispatch(fetchData(data.transaction));
  }, []);
  return (
    <div>
      <ControlPanel />
    </div>
  );
};

export default App;
