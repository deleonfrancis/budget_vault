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
  ADD_EXPENSE,
  EXPENSES_ERROR,
  // UPDATE_EXPENSE,
  // DELETE_EXPENSE,

  // EXPENSE,
  EXP_ID,
  EXPENSE_NAME,
  EXPENSE_AMOUNT,
  EXPENSE_DATE,
  // EXPENSES,
} from "../actions/types";
import { setLoading } from "./budgetActions";

// Create the budget ID
export const createId = () => {
  const id = uuidv4();
  return({
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

// For Setting the Budget Currency
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

// For Setting the Balance
export const setBalance = (balance) => (dispatch) => {
  dispatch({
    type: BALANCE,
    payload: balance,
  });
};

// Create Expense ID
export const createExpId = (id) => (dispatch) => {
  dispatch ({
    type: EXP_ID,
    payload: id,
  });
};

// For Setting the Expense Name
export const setExpName = (text) => (dispatch) => {
  dispatch({
    type: EXPENSE_NAME,
    payload: text,
  });
};

// For Setting the Expense Amount
export const setExpAmount = (amount) => (dispatch) => {
  dispatch({
    type: EXPENSE_AMOUNT,
    payload: amount,
  });
};

// Create the  date the expense created
export const createExpDate = (date) => (dispatch) => {
  dispatch({
    type: EXPENSE_DATE,
    payload: date,
  });
};

// For Setting the Balance
export const addExpense = (expense) => async (dispatch) => {
  try {
    // setLoading();
    // const res = await fetch("/budgets",{
    //     method: "POST",
    //     body: JSON.stringify(expense),
    //     headers: {
    //         "Content-Type": "application/json",
    //       },
    // });
    // const data = await res.json();
    dispatch({
      type: ADD_EXPENSE,
      payload: expense,
    });
    setLoading(false);
  } catch (error) {
    dispatch({
      type: EXPENSES_ERROR,
      payload: error.response.statusText,
    });
  }
};
