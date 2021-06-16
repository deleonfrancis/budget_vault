import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../actions/types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth");
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  // console.log("register called in authActions");
  try {
    const res = await axios.post("/api/users", formData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg });
    loadUser();
  }
};

//  Login User
export const loginUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth", formData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    loadUser();
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg,
    });
  }
};

// Logout
export const logoutUser = () => (dispatch) => dispatch({ type: LOGOUT });

// Clear Errors
export const clearErrors = () => (dispatch) => dispatch({ type: CLEAR_ERRORS });
