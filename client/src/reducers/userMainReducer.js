import {
  USER_BUDGET_ID,
  USER_BUDGET_TITLE,
  USER_CURRENCY,
  USER_BUDGET_AMOUNT,
  USER_BALANCE,
  USER_DATE_CREATED,
  // USER_DATE_UPDATED,
  SET_USER_BUDGET,
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
  SET_USER_BUDGET_AND_SUB_BUDGET,
  // EXPENSES,
} from "../actions/types";
import {
  subtractFromBalanceService,
  addToBalanceService,
  addToBudgetService,
  subtractFromBudgetService,
} from "../utils/budgetTransactions";

const initialState = {
  budget: {},
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
    case USER_BUDGET_ID: {
      return {
        ...state,
        id: action.payload,
      };
    }
    case USER_BUDGET_TITLE: {
      return {
        ...state,
        title: action.payload,
      };
    }
    case USER_CURRENCY: {
      return {
        ...state,
        currency: action.payload,
      };
    }
    case USER_BUDGET_AMOUNT: {
      return {
        ...state,
        budgetAmount: action.payload,
      };
    }
    case USER_BALANCE: {
      return {
        ...state,
        balance: action.payload,
      };
    }
    case USER_DATE_CREATED: {
      return {
        ...state,
        dateCreated: action.payload,
      };
    }
    case USER_EXP_ID: {
      return {
        ...state,
        expenseID: action.payload,
      };
    }
    case USER_EXPENSE_NAME: {
      return {
        ...state,
        expenseName: action.payload,
      };
    }
    case USER_EXPENSE_AMOUNT: {
      return {
        ...state,
        expenseAmount: action.payload,
      };
    }
    case USER_EXPENSE_DATE: {
      return {
        ...state,
        expenseAmount: action.payload,
      };
    }
    case USER_EXPENSES_ERROR: {
      console.error(action.payload);
      return {
        ...state,
        expenseError: action.payload,
      };
    }
    case USER_ADD_EXPENSE: {
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
    case USER_DELETE_EXPENSE: {
      // console.log(action.payload);
      return {
        ...state,
        expenses: state.expenses.filter((exp) => exp.id !== action.payload.id),
        balance: addToBalanceService(state.balance, action.payload.expAmount),
      };
    }
    case USER_ADD_TO_BUDGET: {
      // console.log("ADD_TO_BUDGET");
      // console.log(action.payload);
      // console.log(state.budgetAmount);
      // console.log(state.balance);

      return {
        ...state,
        budgetAmount: addToBudgetService(state.budgetAmount, action.payload),
        balance: addToBalanceService(state.balance, action.payload),
      };
    }
    case USER_SUBTRACT_FROM_BUDGET: {
      // console.log("SUBTRACT_FROM_BUDGET");
      // console.log(action.payload);
      // console.log(state.budgetAmount);
      // console.log(state.balance);
      return {
        ...state,
        budgetAmount: subtractFromBudgetService(
          state.budgetAmount,
          action.payload
        ),
        balance: subtractFromBalanceService(state.balance, action.payload),
      };
    }
    case SET_USER_BUDGET: {
      // console.log("SET_GUEST_BUDGET");
      // console.log(action.payload);
      return {
        ...state,
        budget: action.payload,
      };
    }
    case SET_USER_BUDGET_AND_SUB_BUDGET: {
      // console.log("SET_GUEST_BUDGET_AND_SUB_BUDGET:");
      // console.log(action.payload);
      return {
        ...state,
        budget: action.payload,
        id: action.payload.id,
        title: action.payload.title,
        currency: action.payload.currency,
        budgetAmount: action.payload.budgetAmount,
        dateCreated: action.payload.dateCreated,
        dateUpdated: action.payload.dateUpdated,
        expenses: action.payload.expenses,
        balance: action.payload.balance,
      };
    }
    case USER_CLEAR_BUDGET: {
      return {
        ...state,
        budget: {},
        id: null,
        title: "",
        currency: "",
        budgetAmount: null,
        dateCreated: null,
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

    case USER_SET_MODIFY_BUDGET: {
      return {
        ...state,
        showModifyBudget: action.payload,
      };
    }

    default:
      return state;
  }
};
