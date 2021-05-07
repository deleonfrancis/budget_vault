import {
  GET_BUDGETS,
  ADD_BUDGET,
  //   DELETE_BUDGET,
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

  // GUEST_BUDGET,
  // BUDGET_ID,
  // BUDGET_TITLE,
  // CURRENCY,
  // BUDGET_AMOUNT,
  // BALANCE,
  // DATE_UPDATED,
  // DATE_CREATED,

  // EXPENSES,
  // EXPENSE,
  // EXP_ID,
  // EXPENSE_NAME,
  // EXPENSE_AMOUNT,
  // EXPENSE_DATE,
} from "../actions/types";

const initialState = {
  budgets: [],
  current: null,
  filtered: null,
  loading: false,
  error: null,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BUDGETS: {
      return {
        ...state,
        budgets: action.payload,
        loading: false,
      };
    }
    case ADD_BUDGET: {
      console.log("ADD_BUDGET Reducer");
      console.log(action.payload);
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
        loading: false,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case BUDGETS_ERROR: {
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    }
    case SEARCH_BUDGETS: {
      return {
        ...state,
        filtered: state.budgets.filter((budget) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return budget.title.match(
            regex);
        }),
        loading: false,
      };
    }
    default:
      return state;
  }
};
