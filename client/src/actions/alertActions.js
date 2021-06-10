import { SET_ALERT, REMOVE_ALERT } from "./types";
import { v4 as uuidv4 } from "uuid";

export const setAlert = (msg, type, timeout = 5000) => (dispatch) => {
    // console.log("setAlert fired off")
    const id = uuidv4();
    dispatch({ type: SET_ALERT, payload: { msg, type, id } })
// console.log({msg, type, id})
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout)
  };