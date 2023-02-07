import { Autocomplete, Grid, TextField } from "@mui/material";
import { ErrorMessage, RequestButton } from "common/components";
import useStudentCreator from "modules/students/hooks/useStudentCreator";
import { StudentFormValues } from "modules/students/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { emailValidator, validationMessages } from "utils/validationPatterns";

const defaultValues: StudentFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  assignedToClass: "",
};

type StudentFormProps = {
  onSuccess: (password: string, studentId: string) => void;
};

const StudentForm = ({ onSuccess }: StudentFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormValues>({
    defaultValues,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { createStudent } = useStudentCreator();

  const submitHandler = async (formValues: StudentFormValues) => {
    setError("");
    setIsLoading(true);
    try {
      const { password, studentId } = await createStudent(formValues);
      onSuccess(password, studentId);
    } catch (err: any) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={2}
      component="form"
      onSubmit={handleSubmit(submitHandler)}>
      <Grid item xs={12} md={6}>
        <TextField
          {...register("firstName", { required: validationMessages.required })}
          label="Imię"
          size="small"
          fullWidth
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...register("lastName", { required: validationMessages.required })}
          label="Nazwisko"
          size="small"
          fullWidth
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...register("email", {
            required: validationMessages.required,
            pattern: emailValidator,
          })}
          type="email"
          label="E-mail"
          size="small"
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Autocomplete
          {...register("assignedToClass")}
          options={["I B", "II B", "III B", "IV B", "V B"]}
          renderInput={(params) => (
            <TextField {...params} size="small" label="Klasa" />
          )}
        />
      </Grid>
      {error ? (
        <Grid item xs={12}>
          <ErrorMessage error={error} />
        </Grid>
      ) : null}
      <Grid item xs={12}>
        <RequestButton fullWidth type="submit" isLoading={isLoading}>
          Dodaj
        </RequestButton>
      </Grid>
    </Grid>
  );
};

export default StudentForm;
