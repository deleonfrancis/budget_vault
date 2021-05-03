import { combineReducers } from "redux";
import guestBudgetReducer from "./guestBudgetReducer";

export default combineReducers({
  budget: guestBudgetReducer,
});
