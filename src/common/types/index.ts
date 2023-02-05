export type AccountType = "admin" | "teacher" | "student";

export type User = {
  id: string;
  accountType: AccountType;
};
