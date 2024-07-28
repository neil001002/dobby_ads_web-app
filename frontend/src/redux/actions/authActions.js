import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLoaded, registerSuccess, loginSuccess, authError, logout } from "../reducers/authReducer";
import setAuthToken from "../../utils/setAuthToken";

export const loadUser = createAsyncThunk("auth/loadUser", async (_, { dispatch }) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("http://localhost:5000/api/auth");
    dispatch(userLoaded(res.data));
  } catch (err) {
    dispatch(authError());
  }
});

export const register = createAsyncThunk("auth/register", async ({ username, email, password }, { dispatch }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post("http://localhost:5000/api/auth/signup", body, config);
    dispatch(registerSuccess(res.data));
    dispatch(loadUser());
  } catch (err) {
    dispatch(authError());
  }
});

export const login = createAsyncThunk("auth/login", async ({ email, password }, { dispatch }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", body, config);
    dispatch(loginSuccess(res.data));
    dispatch(loadUser());
  } catch (err) {
    dispatch(authError());
  }
});

export const logoutUser = () => logout();
