export type ClassFormValues = {
  name: string;
  classTeacher: string;
};

export type CreateClass = (formValues: ClassFormValues) => Promise<string>;
