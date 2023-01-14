import { List } from "@mui/material";
import { useAppSelector } from "app/hooks";
import sidebarItems from "common/constants/sidebarItems";

import SidebarListItem from "./SidebarListItem/SidebarListItem";
import { Drawer } from "./SidebarStyles";

type SidebarProps = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen }: SidebarProps) => {
  const user = useAppSelector(({ auth }) => auth.user!);

  return (
    <Drawer
      PaperProps={{ sx: { position: "static" } }}
      variant="permanent"
      open={isOpen}>
      <List>
        {sidebarItems[user.accountType].map(({ label, Icon, path }) => (
          <SidebarListItem
            key={label}
            path={path}
            text={label}
            isOpen={isOpen}
            Icon={<Icon />}
          />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
