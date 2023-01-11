import { Menu } from "@mui/icons-material";
import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";
import Logo from "common/components/Logo/Logo";

type HeaderProps = {
  toggleSidebar: () => void;
};

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleSidebar}>
          <Menu />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Logo />
        </Box>
        <IconButton>
          <Avatar>P</Avatar>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
