import { DocRef } from "common/types";
import { Subject } from "modules/subjects/types";

export type Grade = {
  value: number;
  description: string;
};

export type StudentGrade = {
  subject: Omit<Subject, "teachers">;
  midYearGrade: number;
  finalGrade: number;
  firstTerm: Grade[];
  secondTerm: Grade[];
};

export type StudentGradeDoc = Omit<StudentGrade, "subject"> & {
  subject: DocRef;
};
