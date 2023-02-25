import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ErrorView, Spinner, TabsBar } from "common/components";
import { layoutMainPadding } from "common/components/Layout/Layout";
import { AttendanceTable } from "modules/attendance/components";
import { getStudent } from "../api";
import Grades from "../components/Grades/Grades";
import useStudentTabs from "../hooks/useStudentTabs";

const Student = () => {
  const { studentId, activeTab, changeTab, tabs } = useStudentTabs();

  const {
    data: student,
    isLoading,
    isError,
  } = useQuery(["user", studentId], () => getStudent(studentId), {
    enabled: !!studentId,
  });

  if (isLoading) return <Spinner size="medium" />;
  if (isError) return <ErrorView />;

  const { firstName, lastName } = student;

  const studentName = `${firstName} ${lastName}`;

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

        {activeTab === 0 ? (
          <Grades studentId={studentId} classId={student.class.id} />
        ) : null}
        {activeTab === 1 ? <AttendanceTable /> : null}
      </Box>
    </Box>
  );
};

export default Student;
