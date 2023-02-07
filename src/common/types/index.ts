import { DocumentData, DocumentReference } from "firebase/firestore";

export type AccountType = "admin" | "teacher" | "student";

type Subject = {};

export type User =
  | {
      id: string;
      email: string;
      school: DocumentReference<DocumentData>;
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
