import axios from "axios";
import Localbase from "localbase";
import {
  USER_GET_BUDGETS,
  USER_ADD_BUDGET,
  USER_DELETE_BUDGET,
  //   USER_SET_CURRENT,
  //   USER_CLEAR_CURRENT,
  USER_UPDATE_BUDGET,
  USER_CLEAR_BUDGETS,
  USER_SET_LOADING,
  USER_BUDGETS_ERROR,
  USER_SEARCH_BUDGETS,
  USER_CLEAR_FILTER,
  // USER_GET_EXPENSES,
  // USER_SET_CURRENT_EXPENSE,
  // USER_CLEAR_CURRENT_EXPENSE,
  // USER_ADD_EXPENSE,
  // USER_UPDATE_EXPENSE,
  // USER_DELETE_EXPENSE,
  // USER_EXPENSES_ERROR,
} from "./types";

let db = new Localbase("db");

// Get the Budgets from the server
export const getBudgets = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/budgets");
    dispatch({
      type: USER_GET_BUDGETS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_BUDGETS_ERROR,
      payload: error.response.msg,
    });
  }
};

// adds the budget to the database
export const userAddBudget = (budget) => async (dispatch) => {
  try {
    const res = await axios.post("/api/budgets", budget);
    dispatch({
      type: USER_ADD_BUDGET,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_BUDGETS_ERROR,
      payload: error.response.msg,
    });
  }

  // try {
  //   db.collection("Budget Vault").add({
  //     id: budget.id,
  //     title: budget.title,
  //     currency: budget.currency,
  //     budgetAmount: budget.budgetAmount,
  //     dateCreated: budget.dateCreated,
  //     dateUpdated: null,
  //     expenses: budget.expenses,
  //     balance: budget.balance,
  //   });
  //   dispatch({
  //     type: USER_ADD_BUDGET,
  //     payload: budget,
  //   });
  // } catch (error) {
  //   dispatch({
  //     type: USER_BUDGETS_ERROR,
  //     payload: error.response.statusText,
  //   });
  // }
};

// Updates the budget in the database
export const userUpdateBudget = (budget) => (dispatch) => {
  try {
    db.collection("Budget Vault")
      .doc({
        id: budget.id,
      })
      .update({
        title: budget.title,
        currency: budget.currency,
        budgetAmount: budget.budgetAmount,
        dateCreated: budget.dateCreated,
        dateUpdated: budget.dateUpdated,
        expenses: budget.expenses,
        balance: budget.balance,
      });
    dispatch({
      type: USER_UPDATE_BUDGET,
      payload: budget,
    });
  } catch (error) {
    dispatch({
      type: USER_BUDGETS_ERROR,
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
          type: USER_DELETE_BUDGET,
          payload: id,
        })
      );
  } catch (error) {
    dispatch({
      type: USER_BUDGETS_ERROR,
      payload: error.response.statusText,
    });
  }
};
// Delete a Budget
export const deleteAllBudgets = () => (dispatch) => {
  try {
    console.log("deleteAllBudgets function");
    setLoading();
    db.collection("Budget Vault")
      .delete()
      .then(
        dispatch({
          type: USER_CLEAR_BUDGETS,
        })
      );
  } catch (error) {
    dispatch({
      type: USER_BUDGETS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: USER_SET_LOADING,
  };
};

// Search for Budget
export const searchBudgets = (text) => async (dispatch) => {
  try {
    setLoading();
    dispatch({
      type: USER_SEARCH_BUDGETS,
      payload: text,
    });
  } catch (error) {
    dispatch({
      type: USER_BUDGETS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Sets filter to null
export const clearFilter = () => (dispatch) => {
  try {
    setLoading();
    dispatch({
      type: USER_CLEAR_FILTER,
    });
  } catch (error) {
    dispatch({
      type: USER_BUDGETS_ERROR,
      payload: error.response.statusText,
    });
  }
};
