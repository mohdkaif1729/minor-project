import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("login of store run");
      state.status = true;
    },
    logout: (state) => {
      console.log("logout of store run");
      state.status = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
