import { Autocomplete, Grid, TextField } from "@mui/material";
import { RequestButton } from "common/components";
import { ClassFormValues } from "modules/classes/types";
import { useForm, Controller } from "react-hook-form";
import { validationMessages } from "utils/validationPatterns";

const defaultValues: ClassFormValues = {
  name: "",
  classTeacher: "",
};

const ClassForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
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
        <Controller
          control={control}
          name="classTeacher"
          render={({ field }) => (
            <Autocomplete
              {...field}
              onChange={(_, data) => field.onChange(data)}
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  fullWidth
                  label="Wychowawca"
                  error={!!errors.classTeacher}
                  helperText={errors.classTeacher?.message}
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

export default ClassForm;
