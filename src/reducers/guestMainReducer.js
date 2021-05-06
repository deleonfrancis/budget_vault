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
  CLEAR_BUDGET,
  SET_MODIFY_BUDGET,
  ADD_TO_BUDGET,
  SUBTRACT_FROM_BUDGET,
  // EXPENSES,
} from "../actions/types";
import {
  subtractFromBalanceService,
  addToBalanceService,
  addToBudgetService,
  subtractFromBudgetService
} from "../utils/budgetTransactions";

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
  showModifyBudget: false,
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
      // console.log(state.balance)
      // console.log(action.payload)
      return {
        ...state,
        expense: action.payload,
        expenses: [...state.expenses, action.payload],
        balance: subtractFromBalanceService(
          state.balance,
          action.payload.expAmount
        ),
        expenseID: null,
        expenseName: "",
        expenseAmount: "",
        expenseDate: null,
      };
    }
    case DELETE_EXPENSE: {
      // console.log(action.payload);
      return {
        ...state,
        expenses: state.expenses.filter((exp) => exp.id !== action.payload.id),
        balance: addToBalanceService(state.balance, action.payload.expAmount),
      };
    }
    case ADD_TO_BUDGET: {
      console.log("ADD_TO_BUDGET");
      console.log(action.payload);
      console.log(state.budgetAmount);
      console.log(state.balance);

      return {
        ...state,
        budgetAmount: addToBudgetService(state.budgetAmount, action.payload),
        balance: addToBalanceService(state.balance, action.payload),
      }
    }
    case SUBTRACT_FROM_BUDGET: {
      console.log("SUBTRACT_FROM_BUDGET");
      console.log(action.payload);
      console.log(state.budgetAmount);
      console.log(state.balance);
      return {
        ...state,
        budgetAmount: subtractFromBudgetService(state.budgetAmount, action.payload),
        balance: subtractFromBalanceService(state.balance, action.payload),
      }
    }
    case CLEAR_BUDGET: {
      return {
        ...state,
        budget: null,
        id: null,
        title: "",
        currency: "",
        budgetAmount: null,
        expense: {},
        expenses: [],
        balance: null,
        expenseID: null,
        expenseName: "",
        expenseAmount: "",
        expenseDate: null,
        showModifyBudget: false,
      };
    }

    case SET_MODIFY_BUDGET: {
      return {
        ...state,
        showModifyBudget: action.payload,
      };
    }
    default:
      return state;
  }
};
