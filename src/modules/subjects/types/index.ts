export type SubjectFormValues = {
  name: string;
  teachers: string[];
};

export type CreateSubject = (formValues: SubjectFormValues) => Promise<void>;
