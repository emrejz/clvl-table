export interface ITransaction {
  id: number;
  name: string;
  description: string;
  date: string;
  amount: number;
  currency: string;
}

export interface IAppState {
  transaction: TransactionState;
}
export interface TransactionState {
  data: ITransaction[];
  editData: ITransaction;
}

export const FETCH_DATA = "FETCH_DATA";
export const ADD_DATA = "ADD_DATA";
export const REMOVE_DATA = "REMOVE_DATA";
export const SELECT_EDIT_DATA = "SELECT_EDIT_DATA";
export const CHANGE_EDIT_DATA = "CHANGE_EDIT_DATA";

interface FetchDataRequest {
  type: typeof FETCH_DATA;
  payload: { data: ITransaction[] };
}

interface AddDataRequest {
  type: typeof ADD_DATA;
  payload: { data: ITransaction };
}
interface SelectEditDataRequest {
  type: typeof SELECT_EDIT_DATA;
  payload: { data: ITransaction };
}
interface ChangeEditDataRequest {
  type: typeof CHANGE_EDIT_DATA;
  payload: { data: ITransaction };
}
interface RemoveEditDataRequest {
  type: typeof REMOVE_DATA;
  payload: { id: number };
}
export type TransactionActionsTypes =
  | FetchDataRequest
  | AddDataRequest
  | SelectEditDataRequest
  | ChangeEditDataRequest
  | RemoveEditDataRequest;
