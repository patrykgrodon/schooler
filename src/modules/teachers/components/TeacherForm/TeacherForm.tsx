import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { RequestButton } from "common/components";
import useTeacherCreator from "modules/teachers/hooks/useTeacherCreator";
import { TeacherFormValues } from "modules/teachers/types";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { emailValidator, validationMessages } from "utils/validationPatterns";

const defaultValues: TeacherFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  subjects: [],
};

type TeacherFormProps = {
  onSuccess: (password: string, teacherId: string) => void;
};

const TeacherForm = ({ onSuccess }: TeacherFormProps) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<TeacherFormValues>({ defaultValues });
  const { createTeacher } = useTeacherCreator();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = async (formValues: TeacherFormValues) => {
    setError("");
    setIsLoading(true);
    try {
      const { password, teacherId } = await createTeacher(formValues);
      onSuccess(password, teacherId);
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
          size="small"
          label="Imię"
          fullWidth
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...register("lastName", { required: validationMessages.required })}
          size="small"
          label="Nazwisko"
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
          size="small"
          label="E-mail"
          type="email"
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          control={control}
          name="subjects"
          render={({ field }) => (
            <Autocomplete
              multiple
              onChange={(_, data) => field.onChange(data)}
              options={["Religia", "Matematyka"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  fullWidth
                  label="Przedmioty"
                />
              )}
            />
          )}
        />
      </Grid>
      {error ? (
        <Grid item xs={12}>
          <Typography variant="caption" color="error">
            {error}
          </Typography>
        </Grid>
      ) : null}
      <Grid item xs={12}>
        <RequestButton type="submit" fullWidth isLoading={isLoading}>
          Dodaj
        </RequestButton>
      </Grid>
    </Grid>
  );
};

export default TeacherForm;
