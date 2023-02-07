export type AccountType = "admin" | "teacher" | "student";

type Subject = {};

export type User =
  | {
      id: string;
      email: string;
      school: { schoolName: string; id: string };
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
