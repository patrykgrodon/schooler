import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { sleep } from "utils/sleep";
import { LoginFormValues } from "./types";

export type AuthState = {
  user: undefined | string;
  isLoggingIn: boolean;
};

const initialState: AuthState = {
  user: undefined,
  isLoggingIn: false,
};

export const login = createAsyncThunk(
  "login",
  async ({ email }: LoginFormValues) => {
    await sleep(500);
    return email;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoggingIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggingIn = false;
      });
  },
});

export const selectUser = (state: RootState) => state.auth.user;

export const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
