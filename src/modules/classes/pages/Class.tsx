import { Box, Typography } from "@mui/material";
import { layoutMainPadding } from "common/components/Layout/Layout";
import LessonPlanTable from "modules/lessonPlan/components/LessonPlanTable/LessonPlanTable";
import { StudentsTable } from "modules/students/components";
import { TeachersTable } from "modules/teachers/components";

import TabsBar from "../components/TabsBar/TabsBar";
import useClassTabs from "../hooks/useClassTabs";

const Class = () => {
  const { className, activeTab, changeTab, tabs } = useClassTabs();

  if (!className)
    return <Typography variant="h1">Brak danych o tej klasie</Typography>;
  return (
    <Box>
      <TabsBar
        activeTab={activeTab}
        ariaLabel="Class page tabs bar"
        handleChangeTab={changeTab}
        tabs={tabs}
      />
      <Box sx={{ p: layoutMainPadding }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          Klasa {className}
        </Typography>

        {activeTab === 0 ? <StudentsTable /> : null}
        {activeTab === 1 ? <TeachersTable /> : null}
        {activeTab === 2 ? <LessonPlanTable /> : null}
      </Box>
    </Box>
  );
};

export default Class;
