import {
  CalendarMonth,
  CalendarViewMonthOutlined,
  ClassOutlined,
  GradeOutlined,
  MessageOutlined,
  SchoolOutlined,
  TopicOutlined,
  WorkOutlined,
} from "@mui/icons-material";
import { AccountType } from "modules/auth/authSlice";
import routes from "routes/routePaths";

const messageItem = {
  label: "Wiadomości",
  Icon: MessageOutlined,
  path: routes.Messages,
};

const sidebarStudentItems = [
  { label: "Plan lekcji", Icon: CalendarMonth, path: routes.LessonPlan },
  { label: "Oceny", Icon: GradeOutlined, path: routes.Grades },
  {
    label: "Obecności",
    Icon: CalendarViewMonthOutlined,
    path: routes.Attendance,
  },
  messageItem,
];

const adminSidebarItems = [
  messageItem,
  { label: "Klasy", Icon: ClassOutlined, path: routes.Attendance },
  { label: "Uczniowie", Icon: SchoolOutlined, path: routes.Attendance },
  { label: "Przedmioty", Icon: TopicOutlined, path: routes.Attendance },
  { label: "Nauczyciele", Icon: WorkOutlined, path: routes.Attendance },
];

const sidebarItems: Record<AccountType, typeof sidebarStudentItems> = {
  admin: adminSidebarItems,
  student: sidebarStudentItems,
  teacher: sidebarStudentItems,
};

export default sidebarItems;
