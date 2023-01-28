import { Box, Typography } from "@mui/material";
import { TabsBar } from "common/components";
import { layoutMainPadding } from "common/components/Layout/Layout";
import LessonPlanTable from "modules/lessonPlan/components/LessonPlanTable/LessonPlanTable";
import { StudentsTable } from "modules/students/components";
import { TeachersTable } from "modules/teachers/components";
import useStudentTabs from "../hooks/useStudentTabs";

const Student = () => {
  const { studentName, activeTab, changeTab, tabs } = useStudentTabs();

  if (!studentName)
    return <Typography variant="h1">Brak danych o użytkowniku</Typography>;
  return (
    <Box>
      <TabsBar
        activeTab={activeTab}
        ariaLabel="Student page tabs bar"
        handleChangeTab={changeTab}
        tabs={tabs}
      />
      <Box sx={{ p: layoutMainPadding }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          Uczeń {studentName}
        </Typography>

        {activeTab === 0 ? <StudentsTable /> : null}
        {activeTab === 1 ? <TeachersTable /> : null}
        {activeTab === 2 ? <LessonPlanTable /> : null}
      </Box>
    </Box>
  );
};

export default Student;
