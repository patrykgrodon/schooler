import {
  CalendarMonth,
  CalendarViewMonthOutlined,
  GradeOutlined,
  MessageOutlined,
} from "@mui/icons-material";
import { List } from "@mui/material";
import routes from "routes/routePaths";
import SidebarListItem from "./SidebarListItem/SidebarListItem";
import { Drawer } from "./SidebarStyles";

type SidebarProps = {
  isOpen: boolean;
};

const sidebarStudentItems = [
  { label: "Plan lekcji", Icon: CalendarMonth, path: routes.LessonPlan },
  { label: "Oceny", Icon: GradeOutlined, path: routes.Grades },
  {
    label: "Obecności",
    Icon: CalendarViewMonthOutlined,
    path: routes.Attendance,
  },
  { label: "Wiadomości", Icon: MessageOutlined, path: routes.Messages },
];

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <Drawer
      PaperProps={{ sx: { position: "static" } }}
      variant="permanent"
      open={isOpen}>
      <List>
        {sidebarStudentItems.map(({ label, Icon, path }) => (
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
