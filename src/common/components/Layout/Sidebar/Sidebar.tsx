import { List, Divider } from "@mui/material";
import { MoveToInbox, Mail } from "@mui/icons-material";
import { Drawer } from "./SidebarStyles";
import SidebarListItem from "./SidebarListItem/SidebarListItem";

type SidebarProps = {
  isOpen: boolean;
};

const primaryList = ["Inbox", "Starred", "Send email", "Drafts"];
const secondaryList = ["All mail", "Trash", "Spam"];

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <Drawer
      PaperProps={{ sx: { position: "static" } }}
      variant="permanent"
      open={isOpen}>
      <List>
        {primaryList.map((text, index) => (
          <SidebarListItem
            key={text}
            text={text}
            isOpen={isOpen}
            Icon={index % 2 === 0 ? <MoveToInbox /> : <Mail />}
          />
        ))}
      </List>
      <Divider />
      <List>
        {secondaryList.map((text, index) => (
          <SidebarListItem
            key={text}
            text={text}
            isOpen={isOpen}
            Icon={index % 2 === 0 ? <MoveToInbox /> : <Mail />}
          />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
