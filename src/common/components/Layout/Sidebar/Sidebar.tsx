import { List } from "@mui/material";
import sidebarItems from "common/constants/sidebarItems";
import { useAuth } from "modules/auth/contexts/authContext";

import SidebarListItem from "./SidebarListItem/SidebarListItem";
import { Drawer } from "./SidebarStyles";

type SidebarProps = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen }: SidebarProps) => {
  const { user } = useAuth();

  return (
    <Drawer
      PaperProps={{ sx: { position: "static" } }}
      variant="permanent"
      open={isOpen}>
      <List>
        {sidebarItems[user!.accountType].map(({ label, Icon, path }) => (
          <SidebarListItem
            key={label}
            path={path}
            label={label}
            isOpen={isOpen}
            Icon={Icon}
          />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
