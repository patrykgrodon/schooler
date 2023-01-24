import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { SidebarItem } from "common/constants/sidebarItems";
import { useLocation, useNavigate } from "react-router-dom";

type SidebarListItemProps = SidebarItem & { isOpen: boolean };

const SidebarListItem = ({
  label,
  Icon,
  isOpen,
  path,
}: SidebarListItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => navigate(path);

  return (
    <ListItem
      key={label}
      onClick={handleNavigate}
      onKeyDown={(e: any) => e.keyCode === 13 && handleNavigate()}
      disablePadding
      sx={{
        display: "block",
        backgroundColor: (theme) =>
          location.pathname.includes(path)
            ? theme.palette.action.hover
            : undefined,
      }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: isOpen ? "initial" : "center",
          px: 2.5,
        }}>
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: isOpen ? 3 : "auto",
            justifyContent: "center",
          }}>
          <Icon />
        </ListItemIcon>
        <ListItemText
          primary={label}
          primaryTypographyProps={{ variant: "subtitle1" }}
          sx={{ opacity: isOpen ? 1 : 0, fontWeight: 700 }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarListItem;
