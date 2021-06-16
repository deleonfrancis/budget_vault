import {
  USER_BUDGET_ID,
  USER_BUDGET_TITLE,
  USER_CURRENCY,
  USER_BUDGET_AMOUNT,
  USER_BALANCE,
  USER_DATE_CREATED,
  // USER_DATE_UPDATED,
  SET_USER_BUDGET,
  SET_USER_BUDGET_AND_SUB_BUDGET,
  // USER_CLEAR_GUEST_BUDGET,
  USER_ADD_EXPENSE,
  USER_EXPENSES_ERROR,
  // USER_UPDATE_EXPENSE,
  USER_DELETE_EXPENSE,

  // USER_EXPENSE,
  USER_EXP_ID,
  USER_EXPENSE_NAME,
  USER_EXPENSE_AMOUNT,
  USER_EXPENSE_DATE,
  USER_CLEAR_BUDGET,
  USER_SET_MODIFY_BUDGET,
  USER_ADD_TO_BUDGET,
  USER_SUBTRACT_FROM_BUDGET,
  // USER_EXPENSES,
} from "./types";
import { userAddBudget, setLoading, userUpdateBudget } from "./userBudgetActions";

// Create the budget ID
export const setBudgetId = (id) => (dispatch) => {
  dispatch ({
    type: USER_BUDGET_ID,
    payload: id,
  });
};

// For Setting the budget TITLE
export const setTitle = (text) => (dispatch) => {
  dispatch({
    type: USER_BUDGET_TITLE,
    payload: text,
  });
};

// For Setting the Budget Currency
export const setCurrency = (currency) => (dispatch) => {
  dispatch({
    type: USER_CURRENCY,
    payload: currency,
  });
};

// For Setting the budget AMOUNT
export const setBudgetAmount = (amount) => (dispatch) => {
  dispatch({
    type: USER_BUDGET_AMOUNT,
    payload: amount,
  });
};

// For Setting the Balance
export const setBalance = (balance) => (dispatch) => {
  dispatch({
    type: USER_BALANCE,
    payload: balance,
  });
};

// Create Expense ID
export const createExpId = (id) => (dispatch) => {
  dispatch ({
    type: USER_EXP_ID,
    payload: id,
  });
};

// For Setting the Expense Name
export const setExpName = (text) => (dispatch) => {
  dispatch({
    type: USER_EXPENSE_NAME,
    payload: text,
  });
};

// For Setting the Expense Amount
export const setExpAmount = (amount) => (dispatch) => {
  dispatch({
    type: USER_EXPENSE_AMOUNT,
    payload: amount,
  });
};

// Create the  date the expense created
export const createExpDate = (date) => (dispatch) => {
  dispatch({
    type: USER_EXPENSE_DATE,
    payload: date,
  });
};

// For adding an expense to the expenses array
export const addExpense = (expense) => async (dispatch) => {
  try {
    dispatch({
      type: USER_ADD_EXPENSE,
      payload: expense,
    });
    setLoading(false);
  } catch (error) {
    dispatch({
      type: USER_EXPENSES_ERROR,
      payload: error.response.statusText,
    });
  }
};

// For Setting the Balance
export const deleteExpense = (expense) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DELETE_EXPENSE,
      payload: expense,
    });
    // setLoading(false);
  } catch (error) {
    dispatch({
      type: USER_EXPENSES_ERROR,
      payload: error.response.statusText,
    });
  }
};


// To Clear out a budget
export const clearBudget = () => (dispatch) => {
  dispatch({
    type: USER_CLEAR_BUDGET,
    // payload: budget,
  });
};

// To Clear out a budget
export const setShowModifyBudget = (bool) => (dispatch) => {
  dispatch({
    type: USER_SET_MODIFY_BUDGET,
    payload: bool,
  });
};

// For Adding to the Budget
export const addToBudget = (amount) => async (dispatch) => {
  try {
    dispatch({
      type: USER_ADD_TO_BUDGET,
      payload: amount,
    });
    // setLoading(false);
  } catch (error) {
    dispatch({
      type: USER_EXPENSES_ERROR,
      payload: error.response.statusText,
    });
  }
};

// For Subtracting from the Budget
export const subtractFromBudget = (amount) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SUBTRACT_FROM_BUDGET,
      payload: amount,
    });
    // setLoading(false);
  } catch (error) {
    dispatch({
      type: USER_EXPENSES_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Create the budget date created
export const setDateCreated = (date) => (dispatch) => {
  dispatch ({
    type: USER_DATE_CREATED,
    payload: date,
  });
};

// Fills the budget with the data and adds it to the database
export const setUserBudget = (budget) => (dispatch) => {
  dispatch ({
    type: SET_USER_BUDGET,
    payload: budget,
  });
  dispatch(userAddBudget(budget))
};
// Fills the budget with the data and updates the database
export const setAndUpdate = (budget) => (dispatch) => {
  dispatch ({
    type: SET_USER_BUDGET,
    payload: budget,
  });
  dispatch(userUpdateBudget(budget))
};

// Fills the budget with the data
export const onlySetUserBudget = (budget) => (dispatch) => {
  dispatch ({
    type: SET_USER_BUDGET_AND_SUB_BUDGET,
    payload: budget,
  });
};
