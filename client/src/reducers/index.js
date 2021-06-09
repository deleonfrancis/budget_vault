import { combineReducers } from "redux";
import guestBudgetReducer from "./guestBudgetReducer";
import guestMainReducer from "./guestMainReducer";
import userBudgetReducer from "./userBudgetReducer";
import userMainReducer from "./userMainReducer";
import authReducer from "./authReducer";

export default combineReducers({
  guestBudget: guestBudgetReducer,
  guestMain: guestMainReducer,
  userBudget: userBudgetReducer,
  userMain: userMainReducer,
  authReducer: authReducer, 
});
