import { Autocomplete, Grid, TextField } from "@mui/material";
import { RequestButton } from "common/components";
import { useForm } from "react-hook-form";
import { validationMessages } from "utils/validationPatterns";

export type ClassFormValues = {
  name: string;
  classTeacher: string;
};

const defaultValues: ClassFormValues = {
  name: "",
  classTeacher: "",
};

const ClassForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<ClassFormValues>({ defaultValues });

  const submitHandler = (formValues: ClassFormValues) => {};

  const options = ["Zbigniew Robak"];

  return (
    <Grid
      container
      rowSpacing={3}
      component="form"
      onSubmit={handleSubmit(submitHandler)}>
      <Grid item xs={12}>
        <TextField
          label="Nazwa"
          size="small"
          fullWidth
          {...register("name", { required: validationMessages.required })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </Grid>

      <Grid item xs={12}>
        <Autocomplete
          options={options}
          onChange={(_, val) =>
            val && options.includes(val) && clearErrors("classTeacher")
          }
          renderInput={(params) => (
            <TextField
              {...params}
              {...register("classTeacher", {
                required: validationMessages.required,
              })}
              size="small"
              fullWidth
              label="Wychowawca"
              error={!!errors.classTeacher}
              helperText={errors.classTeacher?.message}
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

export default ClassForm;
