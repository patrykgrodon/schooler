import { CalendarViewMonthOutlined, GradeOutlined } from "@mui/icons-material";
import { useState } from "react";
import { generatePath, useParams } from "react-router-dom";
import routes from "routes/routePaths";
import getTabsBarItem from "utils/getTabsBarItem";

const useStudentTabs = () => {
  const studentId = useParams<{ studentId: string }>().studentId!;
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    getTabsBarItem(
      "Oceny",
      GradeOutlined,
      generatePath(routes.StudentGrades, {
        studentId,
      })
    ),
    getTabsBarItem(
      "Obecności",
      CalendarViewMonthOutlined,
      generatePath(routes.StudentAttendance, {
        studentId,
      })
    ),
  ];

  const changeTab = (newActiveTab: number) => setActiveTab(newActiveTab);
  return { activeTab, changeTab, studentId, tabs };
};

export default useStudentTabs;
