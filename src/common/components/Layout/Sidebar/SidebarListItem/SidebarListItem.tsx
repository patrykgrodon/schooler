import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

type SidebarListItemProps = {
  text: string;
  Icon: React.ReactNode;
  isOpen: boolean;
};

const SidebarListItem = ({ text, Icon, isOpen }: SidebarListItemProps) => {
  return (
    <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
        <ListItemText primary={text} sx={{ opacity: isOpen ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarListItem;
