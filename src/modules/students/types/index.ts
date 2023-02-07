export type StudentFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  assignedToClass: string;
};

export type CreateStudent = (
  formValues: StudentFormValues
) => Promise<{ password: string; studentId: string }>;
