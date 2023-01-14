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
  { label: "Klasy", Icon: ClassOutlined, path: routes.Classes },
  { label: "Uczniowie", Icon: SchoolOutlined, path: routes.Students },
  { label: "Przedmioty", Icon: TopicOutlined, path: routes.Subjects },
  { label: "Nauczyciele", Icon: WorkOutlined, path: routes.Teachers },
  messageItem,
];

const sidebarItems: Record<AccountType, typeof sidebarStudentItems> = {
  admin: adminSidebarItems,
  student: sidebarStudentItems,
  teacher: sidebarStudentItems,
};

export default sidebarItems;
