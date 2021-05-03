import {
  GET_BUDGETS,
  //   ADD_BUDGET,
  //   DELETE_BUDGET,
  //   SET_CURRENT,
  //   CLEAR_CURRENT,
  //   UPDATE_BUDGET,
  //   CLEAR_BUDGETS,
  SET_LOADING,
  BUDGETS_ERROR,
  // SEARCH_BUDGETS,
  // GET_EXPENSES,
  // SET_CURRENT_EXPENSE,
  // CLEAR_CURRENT_EXPENSE,
  // ADD_EXPENSE,
  // UPDATE_EXPENSE,
  // DELETE_EXPENSE,
  // EXPENSES_ERROR,
} from "./types";


// Get the Budgets from the server
export const getBudgets = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/budgets");
    const data = await res.json();
    dispatch({
      type: GET_BUDGETS,
      payload: data,
    });
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
