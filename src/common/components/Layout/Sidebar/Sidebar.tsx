import {
  CalendarMonth,
  CalendarViewMonthOutlined,
  GradeOutlined,
  MessageOutlined,
} from "@mui/icons-material";
import { List } from "@mui/material";
import SidebarListItem from "./SidebarListItem/SidebarListItem";
import { Drawer } from "./SidebarStyles";

type SidebarProps = {
  isOpen: boolean;
};

const sidebarStudentItems = [
  { label: "Plan lekcji", Icon: CalendarMonth },
  { label: "Oceny", Icon: GradeOutlined },
  { label: "Obecności", Icon: CalendarViewMonthOutlined },
  { label: "Wiadomości", Icon: MessageOutlined },
];

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <Drawer
      PaperProps={{ sx: { position: "static" } }}
      variant="permanent"
      open={isOpen}>
      <List>
        {sidebarStudentItems.map(({ label, Icon }) => (
          <SidebarListItem
            key={label}
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
