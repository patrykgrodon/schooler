import { DocRef, School } from "common/types";

export type SubjectFormValues = {
  name: string;
  teachers: string[];
};

export type CreateSubject = (formValues: SubjectFormValues) => Promise<void>;

export type Subject = {
  id: string;
  name: string;
  school: School;
};

export type SubjectDoc = Omit<Subject, "school"> & {
  school: DocRef;
};
