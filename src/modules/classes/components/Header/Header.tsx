import { Add } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
        Klasy
      </Typography>
      <Button>
        <Add fontSize="small" />
        Dodaj klasę
      </Button>
    </Box>
  );
};

export default Header;
