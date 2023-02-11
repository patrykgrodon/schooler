import { DocumentData, DocumentReference } from "firebase/firestore";
import { Student, StudentDoc } from "modules/students/types";
import { Teacher, TeacherDoc } from "modules/teachers/types";

export type AccountType = "admin" | "teacher" | "student";

export type Admin = {
  accountType: "admin";
  id: string;
  school: School;
};
export type AdminDoc = Omit<Admin, "school"> & { school: DocRef };

export type UserDoc =
  | ({ accountType: "admin" } & AdminDoc)
  | ({ accountType: "teacher" } & TeacherDoc)
  | ({ accountType: "student" } & StudentDoc);

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
