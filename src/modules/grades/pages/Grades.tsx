import { Box, Typography } from "@mui/material";

import { ErrorView, Spinner } from "common/components";
import { useAuth } from "modules/auth/contexts/authContext";

import { GradesTable } from "../components";
import useStudentGrades from "../hooks/useStudentGrades";

const Grades = () => {
  const { user } = useAuth();
  const { grades, isError, isLoading } = useStudentGrades(
    user?.id,
    user?.accountType === "student" ? user.class.id : undefined
  );

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
      {!isError && !isLoading ? <GradesTable grades={grades} /> : null}
    </Box>
  );
};

export default Grades;
