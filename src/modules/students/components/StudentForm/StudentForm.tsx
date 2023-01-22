import { Autocomplete, Grid, TextField } from "@mui/material";
import { RequestButton } from "common/components";
import { StudentFormValues } from "modules/students/types";
import { useForm } from "react-hook-form";
import { emailValidator, validationMessages } from "utils/validationPatterns";

const defaultValues: StudentFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  assignedToClass: "",
};

const StudentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormValues>({
    defaultValues,
  });

  const submitHandler = (formValues: StudentFormValues) => {};

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
      <Grid item xs={12}>
        <RequestButton fullWidth type="submit">
          Dodaj
        </RequestButton>
      </Grid>
    </Grid>
  );
};

export default StudentForm;
