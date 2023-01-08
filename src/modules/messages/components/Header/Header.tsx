import { Box, Button, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <Typography variant="h3" component="h1">
        Wiadomości
      </Typography>
      <Button>Napisz wiadomość</Button>
    </Box>
  );
};

export default Header;
