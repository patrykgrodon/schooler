import { Box, TextField, Typography, Link as MuiLink } from "@mui/material";
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
    <Box
      component="form"
      onSubmit={handleSubmit(submitLogin)}
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: 3,
        width: "320px",
        maxWidth: "95%",
      }}>
      <Typography variant="h3" component="h1">
        Logowanie
      </Typography>
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
    </Box>
  );
};

export default LoginForm;
