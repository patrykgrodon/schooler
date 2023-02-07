import { Autocomplete, Grid, TextField } from "@mui/material";
import { ErrorMessage, RequestButton } from "common/components";
import useSubjectCreator from "modules/subjects/hooks/useSubjectCreator";
import { SubjectFormValues } from "modules/subjects/types";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { validationMessages } from "utils/validationPatterns";

const defaultValues: SubjectFormValues = {
  name: "",
  teachers: [],
};

type SubjectFormProps = {
  onSuccess: () => void;
};

const SubjectForm = ({ onSuccess }: SubjectFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SubjectFormValues>({ defaultValues });

  const { createSubject } = useSubjectCreator();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = async (formValues: SubjectFormValues) => {
    setError("");
    setIsLoading(true);
    try {
      await createSubject(formValues);
      onSuccess();
    } catch (err: any) {
      setError(err.message);
    }
    setIsLoading(false);
  };
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
      {error ? (
        <Grid item xs={12}>
          <ErrorMessage error={error} />
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

export default SubjectForm;
