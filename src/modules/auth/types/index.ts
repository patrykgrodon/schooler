import { User } from "common/types";
import { TeacherFormValues } from "modules/teachers/types";

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
  schoolName: string
) => Promise<void>;

export type CreateTeacher = (
  values: TeacherFormValues
) => Promise<{ password: string; teacherId: string }>;
