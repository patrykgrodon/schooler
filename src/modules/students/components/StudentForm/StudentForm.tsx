import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { RequestButton, SubmitErrorMessage } from "common/components";
import useSchoolClassesNames from "modules/classes/hooks/useSchoolClassesNames";
import useStudentCreator from "modules/students/hooks/useStudentCreator";
import { StudentFormValues } from "modules/students/types";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { emailValidator, validationMessages } from "utils/validationPatterns";

const defaultValues: StudentFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  assignedToClass: "",
};

type StudentFormProps = {
  onSuccess: (studentId: string, password: string) => void;
};

const StudentForm = ({ onSuccess }: StudentFormProps) => {
  const { classesNames } = useSchoolClassesNames();

  const {
    control,
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
      const { studentId, password } = await createStudent(formValues);
      onSuccess(studentId, password);
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
        <Controller
          control={control}
          name="assignedToClass"
          rules={{
            required: validationMessages.required,
          }}
          render={({ field }) => (
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel
                error={!!errors.assignedToClass}
                id={"student-form-class-field"}>
                Klasa
              </InputLabel>
              <Select
                {...field}
                labelId={"student-form-class-field"}
                id={"student-form-class-field"}
                label="Klasa"
                error={!!errors.assignedToClass}>
                {classesNames?.map(({ id, name }) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
              {errors.assignedToClass ? (
                <FormHelperText error>
                  {errors.assignedToClass?.message}
                </FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      </Grid>
      {error ? (
        <Grid item xs={12}>
          <SubmitErrorMessage error={error} />
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
