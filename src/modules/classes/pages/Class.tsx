import { SchoolOutlined, WorkOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { layoutMainPadding } from "common/components/Layout/Layout";
import { useState } from "react";
import { generatePath, Link, useParams } from "react-router-dom";
import routes, { RouteValue } from "routes/routePaths";
import TabsBar from "../components/TabsBar/TabsBar";

const Class = () => {
  const params = useParams<{ classId: string }>();
  const [activeTab, setActiveTab] = useState(0);

  if (!params.classId)
    return <Typography variant="h1">Brak danych o tej klasie</Typography>;

  const tabs = [
    {
      label: "Uczniowie",
      Icon: SchoolOutlined,
      to: generatePath(routes.ClassStudents, {
        classId: params.classId,
      }) as RouteValue,
      component: Link,
    },
    {
      label: "Nauczyciele",
      Icon: WorkOutlined,
      to: generatePath(routes.ClassTeachers, {
        classId: params.classId,
      }) as RouteValue,
      component: Link,
    },
    {
      label: "Plan lekcji",
      Icon: SchoolOutlined,
      to: generatePath(routes.ClassLessonPlan, {
        classId: params.classId,
      }) as RouteValue,
      component: Link,
    },
  ];

  const changeTab = (newActiveTab: number) => setActiveTab(newActiveTab);
  return (
    <Box>
      <TabsBar
        activeTab={activeTab}
        ariaLabel="Class page tabs bar"
        handleChangeTab={changeTab}
        tabs={tabs}
      />
      <Box sx={{ p: layoutMainPadding }}>
        <Typography variant="h3" component="h1">
          Klasa {params.classId}
        </Typography>
      </Box>
    </Box>
  );
};

export default Class;
