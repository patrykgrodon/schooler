import { TextField, Link as MuiLink } from "@mui/material";
import { RequestButton } from "common/components";
import { RemindPasswordFormValues } from "modules/auth/types";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import routes from "routes/routePaths";
import { validationMessages, emailValidator } from "utils/validationPatterns";
import FormContainer from "../FormContainer/FormContainer";

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
      <MuiLink component={Link} to={routes.Login}>
        Wróc do ekranu logowania
      </MuiLink>
    </FormContainer>
  );
};

export default RemindPasswordForm;
