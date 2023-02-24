import { DocRef, School } from "common/types";
import { Teacher } from "modules/teachers/types";

export type SubjectFormValues = {
  name: string;
  teachers: string[];
};

export type CreateSubject = (formValues: SubjectFormValues) => Promise<void>;

export type Subject = {
  id: string;
  name: string;
  school: School;
  teachers: Omit<Teacher, "subjects">[];
};

export type SubjectDoc = Omit<Subject, "school"> & {
  school: DocRef;
};

export type ClassSubject = {
  subject: Omit<Subject, "teachers">;
  teacher: Omit<Teacher, "subjects">;
};
