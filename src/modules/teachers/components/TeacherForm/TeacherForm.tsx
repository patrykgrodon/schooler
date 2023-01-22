import { Autocomplete, Grid, TextField } from "@mui/material";
import { RequestButton } from "common/components";
import { TeacherFormValues } from "modules/teachers/types";
import { Controller, useForm } from "react-hook-form";
import { emailValidator, validationMessages } from "utils/validationPatterns";

const defaultValues: TeacherFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  subjects: [],
};

const TeacherForm = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<TeacherFormValues>({ defaultValues });

  const submitHandler = (formValues: TeacherFormValues) => {};

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
          rules={{ required: validationMessages.required }}
          render={({ field }) => (
            <Autocomplete
              multiple
              onChange={(_: any, data: any) => field.onChange(data)}
              options={["Religia", "Matematyka"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  fullWidth
                  label="Przedmioty"
                  error={!!errors.subjects}
                  helperText={errors.subjects?.message}
                />
              )}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <RequestButton type="submit" fullWidth>
          Dodaj
        </RequestButton>
      </Grid>
    </Grid>
  );
};

export default TeacherForm;
