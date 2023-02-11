import { DocRef, School } from "common/types";
import { Student } from "modules/students/types";
import { Teacher } from "modules/teachers/types";

export type ClassFormValues = {
  name: string;
  classTeacher: string;
};

export type CreateClass = (formValues: ClassFormValues) => Promise<string>;

export type ClassType = {
  id: string;
  name: string;
  school: School;
  classTeacher: Teacher | undefined;
  students: Omit<Student, "class">[];
};

export type ClassDoc = Omit<
  ClassType,
  "classTeacher" | "school" | "students"
> & {
  classTeacher: DocRef;
  school: DocRef;
};
