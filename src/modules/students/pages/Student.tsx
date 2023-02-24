import { Box, Typography } from "@mui/material";
import { TabsBar } from "common/components";
import { layoutMainPadding } from "common/components/Layout/Layout";
import { AttendanceTable } from "modules/attendance/components";
import { GradesTable } from "modules/grades/components";
import useStudentTabs from "../hooks/useStudentTabs";

const Student = () => {
  const { studentName, activeTab, changeTab, tabs } = useStudentTabs();

  const getHeaderContent = () => {
    switch (activeTab) {
      case 0:
        return `Oceny ucznia ${studentName}`;
      case 1:
        return `Obecności ucznia ${studentName}`;
      default:
        return "---";
    }
  };

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
          {getHeaderContent()}
        </Typography>

        {activeTab === 0 ? <GradesTable grades={[]} /> : null}
        {activeTab === 1 ? <AttendanceTable /> : null}
      </Box>
    </Box>
  );
};

export default Student;
