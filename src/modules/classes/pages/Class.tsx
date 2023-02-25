import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ErrorView, Spinner, TabsBar } from "common/components";
import { layoutMainPadding } from "common/components/Layout/Layout";
import LessonPlanTable from "modules/lessonPlan/components/LessonPlanTable/LessonPlanTable";
import { getClass } from "../api";
import { ClassStudents } from "../components";
import ClassSubjects from "../components/ClassSubjects/ClassSubjects";

import useClassTabs from "../hooks/useClassTabs";

const Class = () => {
  const { classId, activeTab, changeTab, tabs } = useClassTabs();

  const {
    data: classObj,
    isLoading,
    isError,
  } = useQuery(["classes", classId], () => getClass(classId), {
    enabled: !!classId,
  });

  if (isLoading) return <Spinner size="medium" />;
  if (isError) return <ErrorView />;

  const { name } = classObj;

  const getHeaderContent = () => {
    switch (activeTab) {
      case 0:
        return `Uczniowie klasy ${name}`;
      case 1:
        return `Przedmioty klasy ${name}`;
      case 2:
        return `Plan lekcji klasy ${name}`;
    }
  };

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

        {activeTab === 0 ? <ClassStudents classId={classId} /> : null}
        {activeTab === 1 ? <ClassSubjects classId={classId} /> : null}
        {activeTab === 2 ? <LessonPlanTable /> : null}
      </Box>
    </Box>
  );
};

export default Class;
