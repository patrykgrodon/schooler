import { AccountCircle, LogoutOutlined } from "@mui/icons-material";
import {
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  Menu,
  Typography,
} from "@mui/material";
import useMenu from "common/hooks/useMenu";
import { useAuth } from "modules/auth/contexts/authContext";
import UserAvatar from "../UserAvatar/UserAvatar";

const UserMenu = () => {
  const { menuEl, openMenu, closeMenu } = useMenu();
  const { user, logout } = useAuth();

  const handleOpenMenu: React.MouseEventHandler<HTMLButtonElement> = (e) =>
    openMenu(e.currentTarget);

  const handleLogout = () => {
    logout();
  };

  const listItemActions = [
    {
      text: "Ustaw avatar",
      Icon: AccountCircle,
      onClick: () => {},
    },
    {
      text: "Wyloguj",
      Icon: LogoutOutlined,
      onClick: handleLogout,
    },
  ] as const;

  return (
    <>
      <IconButton onClick={handleOpenMenu}>
        <UserAvatar userInitials="PT" />
      </IconButton>
      <Menu open={!!menuEl} anchorEl={menuEl} onClose={closeMenu}>
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, lineHeight: 1 }}>
            Patryk Testowy
          </Typography>
          <Typography variant="caption">
            {user!.accountType === "student"
              ? "Uczeń"
              : user!.accountType === "admin"
              ? "Administrator"
              : "Nauczyciel"}
          </Typography>
        </ListItem>
        <Divider />
        {listItemActions.map(({ text, onClick, Icon }) => (
          <ListItemButton key={text} onClick={onClick}>
            <Icon fontSize="small" sx={{ mr: 1 }} />
            {text}
          </ListItemButton>
        ))}
      </Menu>
    </>
  );
};

export default UserMenu;
