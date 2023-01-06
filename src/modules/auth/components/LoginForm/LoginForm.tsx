import { Box, Button, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { PasswordField, RequestButton } from "common/components";
import { login } from "modules/auth/authSlice";
import { LoginFormValues } from "modules/auth/types";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { routes } from "routes";

const defaultValues: LoginFormValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginFormValues>({
    defaultValues,
  });
  const { isLoggingIn } = useAppSelector(({ auth }) => auth);
  const dispatch = useAppDispatch();

  const submitLogin = (formValues: LoginFormValues) => {
    dispatch(login(formValues));
    navigate(routes.Base, { replace: true });
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
        {...register("email")}
        type="email"
        size="small"
        label="E-mail"
      />
      <PasswordField {...register("password")} size="small" label="Hasło" />
      <RequestButton type="submit" isLoading={isLoggingIn}>
        Zaloguj się
      </RequestButton>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="text">Zarejestruj się</Button>
        <Button variant="text">Przypomnij hasło</Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
