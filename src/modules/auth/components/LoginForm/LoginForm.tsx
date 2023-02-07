import { Box, Link as MuiLink, TextField } from "@mui/material";
import {
  PasswordField,
  RequestButton,
  SubmitErrorMessage,
} from "common/components";
import { useAuth } from "modules/auth/contexts/authContext";
import { LoginFormValues } from "modules/auth/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import routes from "routes/routePaths";
import { getCorrectNavigateRoute } from "utils/getCorrectNavigationRoute";
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
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();

  const submitLogin = async (formValues: LoginFormValues) => {
    setError("");
    setIsLoading(true);
    try {
      const user = await login(formValues);
      navigate(getCorrectNavigateRoute(user.accountType));
    } catch (err: any) {
      setError(err.message);
    }
    setIsLoading(false);
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
      {error ? <SubmitErrorMessage error={error} /> : null}
      <RequestButton type="submit" isLoading={isLoading}>
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
