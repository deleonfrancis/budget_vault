import { v4 as uuidv4 } from "uuid";
import {
  BUDGET_ID,
  BUDGET_TITLE,
  CURRENCY,
  BUDGET_AMOUNT,
  BALANCE,
  // DATE_UPDATED,
  // DATE_CREATED,
  // GUEST_BUDGET,

  // EXPENSES,
  // EXPENSE,
  // EXP_ID,
  // EXPENSE_NAME,
  // EXPENSE_AMOUNT,
  // EXPENSE_DATE,
} from "../actions/types";

// Create the budget ID
export const createId = (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: BUDGET_ID,
    payload: id,
  });
};

// For Setting the budget TITLE
export const setTitle = (text) => (dispatch) => {
  dispatch({
    type: BUDGET_TITLE,
    payload: text,
  });
};

// For Setting the budget AMOUNT
export const setCurrency = (currency) => (dispatch) => {
  dispatch({
    type: CURRENCY,
    payload: currency,
  });
};

// For Setting the budget AMOUNT
export const setBudgetAmount = (amount) => (dispatch) => {
  dispatch({
    type: BUDGET_AMOUNT,
    payload: amount,
  });
};

// For Setting the budget AMOUNT
export const setBalance = (balance) => (dispatch) => {
  dispatch({
    type: BALANCE,
    payload: balance,
  });
};
