import { DocRef, School } from "common/types";
import { ClassType } from "modules/classes/types";

export type StudentFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  assignedToClass: string;
};

export type CreateStudent = (
  formValues: StudentFormValues
) => Promise<{ password: string; studentId: string }>;

export type Student = {
  id: string;
  accountType: "student";
  class: ClassType;
  email: string;
  firstName: string;
  lastName: string;
  school: School;
};

export type StudentDoc = Omit<Student, "class" | "school"> & {
  class: DocRef;
  school: DocRef;
};
