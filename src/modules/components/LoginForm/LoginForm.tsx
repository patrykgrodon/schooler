import { Box, Button, TextField, Typography } from "@mui/material";
import { useAppDispatch } from "app/hooks";
import { authActions } from "modules/auth/authSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { routes } from "routes";

const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  const submitLogin = () => {
    dispatch(authActions.login());
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
      <TextField {...register("email")} size="small" label="E-mail" />
      <TextField
        {...register("password")}
        size="small"
        type="password"
        label="Hasło"
      />
      <Button type="submit">Zaloguj się</Button>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="text">Zarejestruj się</Button>
        <Button variant="text">Przypomnij hasło</Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
