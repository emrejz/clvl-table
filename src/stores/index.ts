import { IAppState } from "interfaces/transaction";
import { combineReducers, createStore } from "redux";
import transactionReducer from "./transaction/reducers";

const rootReducer = combineReducers<IAppState>({
  transaction: transactionReducer,
});
export default createStore(rootReducer);
