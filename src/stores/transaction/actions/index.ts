import {
  ITransaction,
  TransactionActionsTypes,
  FETCH_DATA,
  ADD_DATA,
  CHANGE_EDIT_DATA,
  SELECT_EDIT_DATA,
  REMOVE_DATA,
} from "interfaces/transaction";

export function fetchData(data: ITransaction[]): TransactionActionsTypes {
  return {
    type: FETCH_DATA,
    payload: { data },
  };
}
export function addData(data: ITransaction): TransactionActionsTypes {
  return {
    type: ADD_DATA,
    payload: { data },
  };
}
export function selectEditData(data: ITransaction): TransactionActionsTypes {
  return {
    type: SELECT_EDIT_DATA,
    payload: { data },
  };
}
export function changeEditData(data: ITransaction): TransactionActionsTypes {
  return {
    type: CHANGE_EDIT_DATA,
    payload: { data },
  };
}
export function removeData(id: number): TransactionActionsTypes {
  return {
    type: REMOVE_DATA,
    payload: { id },
  };
}
