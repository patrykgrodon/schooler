import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register } = useForm();
  return (
    <Box
      component="form"
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
      <Button>Zaloguj się</Button>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="text">Zarejestruj się</Button>
        <Button variant="text">Przypomnij hasło</Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
