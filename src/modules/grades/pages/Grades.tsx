import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ErrorView, Spinner } from "common/components";
import { useAuth } from "modules/auth/contexts/authContext";
import { getClassSubjects } from "modules/subjects/api";
import { getStudentGrades } from "../api";
import { GradesTable } from "../components";

const Grades = () => {
  const { user } = useAuth();
  const {
    data: studentGrades,
    isError: isGradesError,
    isLoading: isGradesLoading,
  } = useQuery(["grades", user?.id], () => getStudentGrades(user!.id), {
    enabled: !!user?.id,
  });

  const userClassId =
    user?.accountType === "student" ? user.class.id : undefined;

  const {
    data: classSubjects,
    isLoading: isClassSubjectsLoading,
    isError: isClassSubjectsError,
  } = useQuery(
    ["class-subjects", userClassId],
    () => getClassSubjects(userClassId!),
    { enabled: !!userClassId }
  );

  const gradesWithDefaults =
    classSubjects?.map(({ subject }) => {
      const defaultValues = {
        subject,
        midYearGrade: 0,
        finalGrade: 0,
        firstTerm: [],
        secondTerm: [],
      };
      return (
        studentGrades?.find(({ subject: { id } }) => id === subject.id) ||
        defaultValues
      );
    }) || [];

  const isError = isGradesError || isClassSubjectsError;
  const isLoading = isGradesLoading || isClassSubjectsLoading;

  return (
    <Box
      sx={{
        height: "100%",
        overflow: "auto",
        display: "flex",
        rowGap: 1,
        flexDirection: "column",
      }}>
      <Typography variant="h3" component="h1">
        Oceny
      </Typography>
      {isLoading ? <Spinner size="medium" /> : null}
      {isError && !isLoading ? <ErrorView /> : null}
      {!isError && !isLoading ? (
        <GradesTable grades={gradesWithDefaults} />
      ) : null}
    </Box>
  );
};

export default Grades;
