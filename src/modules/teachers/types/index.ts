export type TeacherFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subjects: string[];
};

export type CreateTeacher = (
  values: TeacherFormValues
) => Promise<{ password: string; teacherId: string }>;
