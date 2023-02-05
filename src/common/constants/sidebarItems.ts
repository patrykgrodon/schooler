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
import { AccountType } from "common/types";
import routes, { RouteValue } from "routes/routePaths";

export type SidebarItem = {
  label: string;
  Icon: React.ElementType;
  path: RouteValue;
};

const messageItem: SidebarItem = {
  label: "Wiadomości",
  Icon: MessageOutlined,
  path: routes.Messages,
};

const lessonPlanItem: SidebarItem = {
  label: "Plan lekcji",
  Icon: CalendarMonth,
  path: routes.LessonPlan,
};
const classesItem: SidebarItem = {
  label: "Klasy",
  Icon: ClassOutlined,
  path: routes.Classes,
};

const adminSidebarItems: SidebarItem[] = [
  classesItem,
  { label: "Uczniowie", Icon: SchoolOutlined, path: routes.Students },
  { label: "Przedmioty", Icon: TopicOutlined, path: routes.Subjects },
  { label: "Nauczyciele", Icon: WorkOutlined, path: routes.Teachers },
  messageItem,
];

const teacherSidebarItems: SidebarItem[] = [
  lessonPlanItem,
  classesItem,
  messageItem,
];

const studentSidebarItems: SidebarItem[] = [
  lessonPlanItem,
  { label: "Oceny", Icon: GradeOutlined, path: routes.Grades },
  {
    label: "Obecności",
    Icon: CalendarViewMonthOutlined,
    path: routes.Attendance,
  },
  messageItem,
];

const sidebarItems: Record<AccountType, SidebarItem[]> = {
  admin: adminSidebarItems,
  teacher: teacherSidebarItems,
  student: studentSidebarItems,
};

export default sidebarItems;
