import {
  BUDGET_ID,
  BUDGET_TITLE,
  CURRENCY,
  BUDGET_AMOUNT,
  BALANCE,
  DATE_CREATED,
  // DATE_UPDATED,
  SET_GUEST_BUDGET,
  SET_GUEST_BUDGET_AND_SUB_BUDGET,
  // CLEAR_GUEST_BUDGET,
  ADD_EXPENSE,
  EXPENSES_ERROR,
  // UPDATE_EXPENSE,
  DELETE_EXPENSE,

  // EXPENSE,
  EXP_ID,
  EXPENSE_NAME,
  EXPENSE_AMOUNT,
  EXPENSE_DATE,
  CLEAR_BUDGET,
  SET_MODIFY_BUDGET,
  ADD_TO_BUDGET,
  SUBTRACT_FROM_BUDGET,
  // EXPENSES,
} from "../actions/types";
// import { subtractFromBudgetService } from "../utils/budgetTransactions";
import { addBudget, setLoading } from "./budgetActions";

// Create the budget ID
export const setBudgetId = (id) => (dispatch) => {
  dispatch ({
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

// For adding an expense to the expenses array
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

// For Setting the Balance
export const deleteExpense = (expense) => async (dispatch) => {
  try {

    console.log(expense);
    dispatch({
      type: DELETE_EXPENSE,
      payload: expense,
    });
    // setLoading(false);
  } catch (error) {
    dispatch({
      type: EXPENSES_ERROR,
      payload: error.response.statusText,
    });
  }
};


// To Clear out a budget
export const clearBudget = () => (dispatch) => {
  dispatch({
    type: CLEAR_BUDGET,
    // payload: budget,
  });
};

// To Clear out a budget
export const setShowModifyBudget = (bool) => (dispatch) => {
  dispatch({
    type: SET_MODIFY_BUDGET,
    payload: bool,
  });
};

// For Adding to the Budget
export const addToBudget = (amount) => async (dispatch) => {
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
    // console.log(amount);
    dispatch({
      type: ADD_TO_BUDGET,
      payload: amount,
    });
    // setLoading(false);
  } catch (error) {
    dispatch({
      type: EXPENSES_ERROR,
      payload: error.response.statusText,
    });
  }
};

// For Subtracting from the Budget
export const subtractFromBudget = (amount) => async (dispatch) => {
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
    // console.log(amount);
    dispatch({
      type: SUBTRACT_FROM_BUDGET,
      payload: amount,
    });
    // setLoading(false);
  } catch (error) {
    dispatch({
      type: EXPENSES_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Create the budget date created
export const setDateCreated = (date) => (dispatch) => {
  dispatch ({
    type: DATE_CREATED,
    payload: date,
  });
};

// Fills the budget with the data
export const setGuestBudget = (budget) => (dispatch) => {
  dispatch ({
    type: SET_GUEST_BUDGET,
    payload: budget,
  });
  dispatch(addBudget(budget))
};

// Fills the budget with the data
export const onlySetGuestBudget = (budget) => (dispatch) => {
  console.log("onlySetGuestBudget():");
  console.log(budget);
  dispatch ({
    type: SET_GUEST_BUDGET_AND_SUB_BUDGET,
    payload: budget,
  });
};
