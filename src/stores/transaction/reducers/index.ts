import { initEditData } from "constants/initData";
import {
  TransactionActionsTypes,
  TransactionState,
  FETCH_DATA,
  ADD_DATA,
  SELECT_EDIT_DATA,
  CHANGE_EDIT_DATA,
  REMOVE_DATA,
} from "interfaces/transaction";

const initialState: TransactionState = {
  data: [],
  editData: initEditData,
};

const transactionReducer = (
  state = initialState,
  action: TransactionActionsTypes
): TransactionState => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload.data,
      };
    case ADD_DATA:
      return {
        ...state,
        data: [...state.data, action.payload.data],
      };
    case SELECT_EDIT_DATA:
      return {
        ...state,
        editData: action.payload.data,
      };
    case CHANGE_EDIT_DATA:
      return {
        data: state.data.map((item) =>
          item.id === action.payload.data.id ? action.payload.data : item
        ),
        editData: initEditData,
      };
    case REMOVE_DATA:
      return {
        data: state.data.filter(
          (item) => item.id !== action.payload.id && item
        ),
        editData: initEditData,
      };
    default:
      return state;
  }
};
export default transactionReducer;
