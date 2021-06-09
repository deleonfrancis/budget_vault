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

  // USER_GUEST_BUDGET,
  // USER_BUDGET_ID,
  // USER_BUDGET_TITLE,
  // USER_CURRENCY,
  // USER_BUDGET_AMOUNT,
  // USER_BALANCE,
  // USER_DATE_UPDATED,
  // USER_DATE_CREATED,

  // USER_EXPENSES,
  // USER_EXPENSE,
  // USER_EXP_ID,
  // USER_EXPENSE_NAME,
  // USER_EXPENSE_AMOUNT,
  // USER_EXPENSE_DATE,
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
    case USER_GET_BUDGETS: {
      return {
        ...state,
        budgets: action.payload,
        loading: false,
      };
    }
    case USER_ADD_BUDGET: {
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
        loading: false,
      };
    }
    case USER_UPDATE_BUDGET: {
      return {
        ...state,
        budgets: state.budgets.map((budget) =>
          budget.id === action.payload.id ? action.payload : budget
        ),
        loading: false,
      };
    }
    case USER_DELETE_BUDGET: {
      // console.log("DELETE_BUDGET Reducer");
      // console.log(action.payload);
      return {
        ...state,
        budgets: state.budgets.filter((budget) => budget.id !== action.payload),
        loading: false,
      };
    }
    case USER_CLEAR_BUDGETS: {
      return {
        ...state,
        budgets: [],
      };
    }
    case USER_CLEAR_FILTER: {
      return {
        ...state,
        filtered: null,
        loading: false,
      };
    }
    case USER_SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_BUDGETS_ERROR: {
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    }
    case USER_SEARCH_BUDGETS: {
      return {
        ...state,
        filtered: state.budgets.filter((budget) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return budget.title.match(regex);
        }),
        loading: false,
      };
    }
    default:
      return state;
  }
};
