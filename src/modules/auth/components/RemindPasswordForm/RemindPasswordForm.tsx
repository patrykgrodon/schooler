import { TextField } from "@mui/material";
import { RequestButton } from "common/components";
import { RemindPasswordFormValues } from "modules/auth/types";
import { useForm } from "react-hook-form";

import { validationMessages, emailValidator } from "utils/validationPatterns";
import FormContainer from "../FormContainer/FormContainer";
import ReturnToLoginLink from "../ReturnToLoginLink/ReturnToLoginLink";

const defaultValues: RemindPasswordFormValues = {
  email: "",
};

const RemindPasswordForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RemindPasswordFormValues>({ defaultValues });

  const submitRemindPassword = (formValues: RemindPasswordFormValues) => {};

  return (
    <FormContainer
      onSubmit={handleSubmit(submitRemindPassword)}
      title={"Przypomnij hasło"}>
      <TextField
        {...register("email", {
          required: validationMessages.required,
          pattern: emailValidator,
        })}
        type="email"
        size="small"
        label="E-mail"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <RequestButton>Wyślij</RequestButton>
      <ReturnToLoginLink />
    </FormContainer>
  );
};

export default RemindPasswordForm;
