import { Box, TextField, Link as MuiLink } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { PasswordField, RequestButton } from "common/components";
import { login } from "modules/auth/authSlice";
import { LoginFormValues } from "modules/auth/types";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import routes from "routes/routePaths";
import {
  emailValidator,
  passwordValidator,
  validationMessages,
} from "utils/validationPatterns";
import FormContainer from "../FormContainer/FormContainer";

const defaultValues: LoginFormValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues,
  });
  const { isLoggingIn } = useAppSelector(({ auth }) => auth);
  const dispatch = useAppDispatch();

  const submitLogin = (formValues: LoginFormValues) => {
    dispatch(login(formValues));
  };

  return (
    <FormContainer onSubmit={handleSubmit(submitLogin)} title="Logowanie">
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
      <PasswordField
        {...register("password", {
          required: validationMessages.required,
          pattern: passwordValidator,
        })}
        size="small"
        label="Hasło"
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <RequestButton type="submit" isLoading={isLoggingIn}>
        Zaloguj się
      </RequestButton>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <MuiLink component={Link} to={routes.Register}>
          Zarejestruj się
        </MuiLink>
        <MuiLink component={Link} to={routes.RemindPassword}>
          Przypomnij hasło
        </MuiLink>
      </Box>
    </FormContainer>
  );
};

export default LoginForm;
