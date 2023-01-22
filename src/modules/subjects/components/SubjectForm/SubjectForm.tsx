import { Autocomplete, Grid, TextField } from "@mui/material";
import { RequestButton } from "common/components";
import { SubjectFormValues } from "modules/subjects/types";
import { Controller, useForm } from "react-hook-form";
import { validationMessages } from "utils/validationPatterns";

const defaultValues: SubjectFormValues = {
  name: "",
  teachers: [],
};

const SubjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SubjectFormValues>({ defaultValues });

  const submitHandler = (formValues: SubjectFormValues) => {};

  const options = ["Zbigniew Robak"];

  return (
    <Grid
      container
      rowSpacing={3}
      component="form"
      onSubmit={handleSubmit(submitHandler)}>
      <Grid item xs={12}>
        <TextField
          {...register("name", { required: validationMessages.required })}
          fullWidth
          size="small"
          label="Nazwa"
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          control={control}
          name="teachers"
          rules={{ required: validationMessages.required }}
          render={({ field }) => (
            <Autocomplete
              {...field}
              onChange={(_, data) => field.onChange(data)}
              options={options}
              multiple
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Nauczyciele"
                  size="small"
                  fullWidth
                  error={!!errors.teachers}
                  helperText={errors.teachers?.message}
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

export default SubjectForm;
