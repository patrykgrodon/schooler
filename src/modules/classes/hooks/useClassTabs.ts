import { SchoolOutlined, WorkOutlined } from "@mui/icons-material";
import { useState } from "react";
import { generatePath, useParams } from "react-router-dom";
import routes from "routes/routePaths";
import getTabsBarItem from "utils/getTabsBarItem";

const useClassTabs = () => {
  const classId = useParams<{ classId: string }>().classId!;
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    getTabsBarItem(
      "Uczniowie",
      SchoolOutlined,
      generatePath(routes.ClassStudents, {
        classId,
      })
    ),
    getTabsBarItem(
      "Nauczyciele",
      WorkOutlined,
      generatePath(routes.ClassTeachers, {
        classId,
      })
    ),
    getTabsBarItem(
      "Plan lekcji",
      SchoolOutlined,
      generatePath(routes.ClassLessonPlan, {
        classId,
      })
    ),
  ];

  const changeTab = (newActiveTab: number) => setActiveTab(newActiveTab);
  return { activeTab, changeTab, classId, tabs };
};

export default useClassTabs;
