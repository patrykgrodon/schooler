export type AccountType = "admin" | "teacher" | "student";

type Subject = {};

export type User =
  | {
      id: string;
      email: string;
      schoolId: string;
    } & (
      | { accountType: "admin"; schoolName: string }
      | {
          accountType: "teacher";
          firstName: string;
          lastName: string;
          subjects: Subject[];
        }
      | { accountType: "student" }
    );
