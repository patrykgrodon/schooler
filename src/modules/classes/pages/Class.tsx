import { Box, Typography } from "@mui/material";
import { TabsBar } from "common/components";
import { layoutMainPadding } from "common/components/Layout/Layout";
import LessonPlanTable from "modules/lessonPlan/components/LessonPlanTable/LessonPlanTable";
import { StudentsTable } from "modules/students/components";
import { TeachersTable } from "modules/teachers/components";

import useClassTabs from "../hooks/useClassTabs";

const Class = () => {
  const { className, activeTab, changeTab, tabs } = useClassTabs();

  const getHeaderContent = () => {
    switch (activeTab) {
      case 0:
        return `Uczniowie klasy ${className}`;
      case 1:
        return `Nauczyciele klasy ${className}`;
      case 2:
        return `Plan lekcji klasy ${className}`;
    }
  };

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
          {getHeaderContent()}
        </Typography>

        {activeTab === 0 ? <StudentsTable students={[]} /> : null}
        {activeTab === 1 ? <TeachersTable /> : null}
        {activeTab === 2 ? <LessonPlanTable /> : null}
      </Box>
    </Box>
  );
};

export default Class;
