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
  DELETE_EXPENSE,

  // EXPENSE,
  EXP_ID,
  EXPENSE_NAME,
  EXPENSE_AMOUNT,
  EXPENSE_DATE,
  // EXPENSES,
} from "../actions/types";

const initialState = {
  budget: null,
  id: null,
  title: "",
  currency: "",
  budgetAmount: null,
  balance: null,
  dateUpdated: null,
  dateCreated: null,
  expense: {},
  expenseID: null,
  expenseName: "",
  expenseAmount: "",
  expenseDate: null,
  expenses: [],
  expenseError: null,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case BUDGET_ID: {
      return {
        ...state,
        id: action.payload,
      };
    }
    case BUDGET_TITLE: {
      return {
        ...state,
        title: action.payload,
      };
    }
    case CURRENCY: {
      return {
        ...state,
        currency: action.payload,
      };
    }
    case BUDGET_AMOUNT: {
      return {
        ...state,
        budgetAmount: action.payload,
      };
    }
    case BALANCE: {
      return {
        ...state,
        balance: action.payload,
      };
    }
    case EXP_ID: {
      return {
        ...state,
        expenseID: action.payload,
      };
    }
    case EXPENSE_NAME: {
      return {
        ...state,
        expenseName: action.payload,
      };
    }
    case EXPENSE_AMOUNT: {
      return {
        ...state,
        expenseAmount: action.payload,
      };
    }
    case EXPENSE_DATE: {
      return {
        ...state,
        expenseAmount: action.payload,
      };
    }
    case EXPENSES_ERROR: {
      console.error(action.payload);
      return {
        ...state,
        expenseError: action.payload,
      };
    }
    case ADD_EXPENSE: {
      return {
        ...state,
        expense: action.payload,
        expenses: [...state.expenses, action.payload],
        expenseID: null,
        expenseName: "",
        expenseAmount: "",
        expenseDate: null,
      };
    }
    case DELETE_EXPENSE: {
      console.log(action.payload)
      return {
        ...state,
        expenses: state.expenses.filter((exp)=> exp.id !== action.payload),
      };
    }

    default:
      return state;
  }
};
