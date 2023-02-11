import { DocRef, School } from "common/types";
import { ClassType } from "modules/classes/types";
import { Subject } from "modules/subjects/types";

export type TeacherFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subjects: string[];
};

export type CreateTeacher = (
  values: TeacherFormValues
) => Promise<{ password: string; teacherId: string }>;

export type Teacher = {
  id: string;
  accountType: "teacher";
  email: string;
  firstName: string;
  lastName: string;
  school: School;
  subjects: Subject[];
  teacherOfClass: ClassType;
};

export type TeacherDoc = Omit<
  Teacher,
  "school" | "subjects" | "teacherOfClass"
> & {
  school: DocRef;
  subjects: DocRef[];
  teacherOfClass: DocRef;
};
