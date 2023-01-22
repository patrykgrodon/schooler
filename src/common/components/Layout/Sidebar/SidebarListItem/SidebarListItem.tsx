import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { RouteValue } from "routes/routePaths";

type SidebarListItemProps = {
  text: string;
  Icon: React.ReactNode;
  isOpen: boolean;
  path: RouteValue;
};

const SidebarListItem = ({
  text,
  Icon,
  isOpen,
  path,
}: SidebarListItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => navigate(path);

  return (
    <ListItem
      key={text}
      onClick={handleNavigate}
      onKeyDown={(e: any) => e.keyCode === 13 && handleNavigate()}
      disablePadding
      sx={{
        display: "block",
        backgroundColor: (theme) =>
          path === location.pathname ? theme.palette.action.hover : undefined,
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
          {Icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          primaryTypographyProps={{ variant: "subtitle1" }}
          sx={{ opacity: isOpen ? 1 : 0, fontWeight: 700 }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarListItem;
