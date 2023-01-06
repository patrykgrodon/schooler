import { Box } from "@mui/material";
import LoginForm from "modules/auth/components/LoginForm/LoginForm";

const Login = () => {
  return (
    <Box
      component="main"
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <LoginForm />
    </Box>
  );
};

export default Login;
