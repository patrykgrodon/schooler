import { Autocomplete, Grid, TextField } from "@mui/material";
import { RequestButton, SubmitErrorMessage } from "common/components";
import useClassCreator from "modules/classes/hooks/useClassCreator";
import { ClassFormValues } from "modules/classes/types";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { validationMessages } from "utils/validationPatterns";

const defaultValues: ClassFormValues = {
  name: "",
  classTeacher: "",
};

type ClassFormProps = {
  onSuccess: (classId: string) => void;
};

const ClassForm = ({ onSuccess }: ClassFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ClassFormValues>({ defaultValues });
  const { createClass } = useClassCreator();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = async (formValues: ClassFormValues) => {
    setError("");
    setIsLoading(true);
    try {
      const classId = await createClass(formValues);
      onSuccess(classId);
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
      {error ? (
        <Grid item xs={12}>
          <SubmitErrorMessage error={error} />
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

export default ClassForm;
