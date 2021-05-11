import { combineReducers } from "redux";
import guestBudgetReducer from "./guestBudgetReducer";
import guestMainReducer from "./guestMainReducer";

export default combineReducers({
  guestBudget: guestBudgetReducer,
  guestMain: guestMainReducer,
});
