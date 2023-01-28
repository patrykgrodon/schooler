import { SchoolOutlined, WorkOutlined } from "@mui/icons-material";
import { useState } from "react";
import { generatePath, Link, useParams } from "react-router-dom";
import routes, { RouteValue } from "routes/routePaths";

const useClassTabs = () => {
  const classId = useParams<{ classId: string }>().classId!;
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Uczniowie",
      Icon: SchoolOutlined,
      to: generatePath(routes.ClassStudents, {
        classId,
      }) as RouteValue,
      component: Link,
    },
    {
      label: "Nauczyciele",
      Icon: WorkOutlined,
      to: generatePath(routes.ClassTeachers, {
        classId,
      }) as RouteValue,
      component: Link,
    },
    {
      label: "Plan lekcji",
      Icon: SchoolOutlined,
      to: generatePath(routes.ClassLessonPlan, {
        classId,
      }) as RouteValue,
      component: Link,
    },
  ];

  const changeTab = (newActiveTab: number) => setActiveTab(newActiveTab);
  return { activeTab, changeTab, className: classId, tabs };
};

export default useClassTabs;
