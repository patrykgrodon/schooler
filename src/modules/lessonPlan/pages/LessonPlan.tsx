import { Box, Typography } from "@mui/material";
import LessonPlanTable from "../components/LessonPlanTable/LessonPlanTable";

const LessonPlan = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        m: "0 auto",
      }}>
      <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
        Plan lekcji klasa IV B
      </Typography>
      <LessonPlanTable />
    </Box>
  );
};

export default LessonPlan;
