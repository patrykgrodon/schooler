import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { sleep } from "utils/sleep";
import { LoginFormValues, RegisterFormValues } from "./types";

type AccountType = "student" | "teacher" | "admin";

export type User = {
  id: number;
  email: string;
  accountType: AccountType;
};

export type AuthState = {
  user: User | undefined;
  isLoggingIn: boolean;
};

const initialState: AuthState = {
  user: undefined,
  isLoggingIn: false,
};
const getAccType = (email: string): AccountType => {
  switch (email) {
    case "test1@gmail.com":
      return "admin";
    case "test2@gmail.com":
      return "teacher";
    case "test3@gmail.com":
      return "student";
    default:
      return "student";
  }
};

export const login = createAsyncThunk(
  "login",
  async ({ email }: LoginFormValues) => {
    await sleep(500);
    return { id: 1, email, accountType: getAccType(email) } as const;
  }
);
export const createAdminAccount = createAsyncThunk(
  "createAdminAccount",
  async (formValues: RegisterFormValues) => {
    await sleep(500);
    return formValues;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = undefined;
    },
  },
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
