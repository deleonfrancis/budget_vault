import {
    BUDGET_ID,
    BUDGET_TITLE,
    CURRENCY,
    BUDGET_AMOUNT,
    BALANCE,
    // DATE_UPDATED,
    // DATE_CREATED,
    // GUEST_BUDGET,
  
    // EXPENSES,
    // EXPENSE,
    // EXP_ID,
    // EXPENSE_NAME,
    // EXPENSE_AMOUNT,
    // EXPENSE_DATE,
  } from "../actions/types";

const initialState = {
  budget: null,
  id: null,
  title: "",
  currency: null,
  budgetAmount: null,
  balance: null,
  dateUpdated: null,
  dateCreated: null,
  expenses: null,
  expense: null,
  expenseID: null,
  expenseName: null,
  expenseAmount: null,
  expenseDate: null,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
switch (action.type) {
    case BUDGET_ID:{
        return{
            ...state,
            id: action.payload,
        }
    }
    case BUDGET_TITLE:{
        return{
            ...state,
            title: action.payload,
        }
    }
    case CURRENCY:{
        return{
            ...state,
            currency: action.payload,
        }
    }
    case BUDGET_AMOUNT:{
        return{
            ...state,
            budgetAmount: action.payload,
        }
    }
    case BALANCE:{
        return{
            ...state,
            balance: action.payload,
        }
    }

    default:
       return state;
}
}
