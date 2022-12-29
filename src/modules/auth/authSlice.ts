import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export type AuthState = {
  user: undefined | string;
};

const initialState: AuthState = {
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.user = "user";
    },
  },
});

export const selectUser = (state: RootState) => state.auth.user;

export const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
