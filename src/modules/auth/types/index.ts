import { User } from "common/types";

export type LoginFormValues = {
  email: string;
  password: string;
};

export type RegisterFormValues = {
  email: string;
  schoolName: string;
  password: string;
  confirmPassword: string;
};

export type RemindPasswordFormValues = {
  email: string;
};

export type Login = (loginFormValues: LoginFormValues) => Promise<User>;

export type CreateAdmin = (
  email: string,
  password: string,
  name: string
) => Promise<void>;
