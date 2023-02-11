import { DocumentData, DocumentReference } from "firebase/firestore";
import { Student } from "modules/students/types";
import { Teacher } from "modules/teachers/types";

export type AccountType = "admin" | "teacher" | "student";

export type Admin = {
  accountType: "admin";
  id: string;
  school: School;
};

export type User =
  | ({ accountType: "admin" } & Admin)
  | ({ accountType: "teacher" } & Teacher)
  | ({ accountType: "student" } & Student);

export type DocRef = DocumentReference<DocumentData>;

export type School = {
  id: string;
  name: string;
};
export type SchoolDoc = School;
