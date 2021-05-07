// import { openDB, deleteDB, wrap, unwrap } from 'idb';
import Localbase from "localbase";
import {
  GET_BUDGETS,
  ADD_BUDGET,
  DELETE_BUDGET,
  //   SET_CURRENT,
  //   CLEAR_CURRENT,
  //   UPDATE_BUDGET,
  //   CLEAR_BUDGETS,
  SET_LOADING,
  BUDGETS_ERROR,
  SEARCH_BUDGETS,
  // GET_EXPENSES,
  // SET_CURRENT_EXPENSE,
  // CLEAR_CURRENT_EXPENSE,
  // ADD_EXPENSE,
  // UPDATE_EXPENSE,
  // DELETE_EXPENSE,
  // EXPENSES_ERROR,
} from "./types";

let db = new Localbase("db");

// Get the Budgets from the server
export const getBudgets = () => (dispatch) => {
  try {
    setLoading();
    db.collection("Budget Vault")
      .get()

      // const res = await fetch("/budgets");
      // const data = await res.json();
      .then((data) => {
        // console.log(data);
        dispatch({
          type: GET_BUDGETS,
          payload: data,
        });
      });
  } catch (error) {
    dispatch({
      type: BUDGETS_ERROR,
      payload: error.response.statusText,
    });
  }
};

//
export const addBudget = (budget) => (dispatch) => {
  try {
    db.collection("Budget Vault").add({
      id: budget.id,
      title: budget.title,
      currency: budget.currency,
      budgetAmount: budget.budgetAmount,
      dateCreated: budget.dateCreated,
      expenses: budget.expenses,
      balance: budget.balance,
    });
    dispatch({
      type: ADD_BUDGET,
      payload: budget,
    });
  } catch (error) {
    dispatch({
      type: BUDGETS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Delete a Budget
export const deleteBudget = (id) => (dispatch) => {
  try {
    setLoading();
    db.collection("Budget Vault")
      .doc({ id: id })
      .delete()
      .then(
        dispatch({
          type: DELETE_BUDGET,
          payload: id,
        })
      );
  } catch (error) {
    dispatch({
      type: BUDGETS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// Search for Budget
export const searchBudgets = (text) => async (dispatch) => {
  try {
    setLoading();
    dispatch({
      type: SEARCH_BUDGETS,
      payload: text,
    });
  } catch (error) {
    dispatch({
      type: BUDGETS_ERROR,
      payload: error.response.statusText,
    });
  }
};
