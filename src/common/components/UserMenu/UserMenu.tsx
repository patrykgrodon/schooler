import { AccountCircle, LogoutOutlined } from "@mui/icons-material";
import {
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  Menu,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "app/hooks";
import useMenu from "common/hooks/useMenu";
import { authActions } from "modules/auth/authSlice";
import UserAvatar from "../UserAvatar/UserAvatar";

const UserMenu = () => {
  const { menuEl, openMenu, closeMenu } = useMenu();
  const dispatch = useAppDispatch();

  const handleOpenMenu: React.MouseEventHandler<HTMLButtonElement> = (e) =>
    openMenu(e.currentTarget);

  const listItemActions = [
    {
      text: "Ustaw avatar",
      Icon: AccountCircle,
      onClick: () => {},
    },
    {
      text: "Wyloguj",
      Icon: LogoutOutlined,
      onClick: () => dispatch(authActions.logout()),
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
          <Typography variant="caption">Klasa IV B</Typography>
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
