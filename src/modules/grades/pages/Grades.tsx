import { Box, Typography } from "@mui/material";
import { GradesTable } from "../components";

const Grades = () => {
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
      <GradesTable />
    </Box>
  );
};

export default Grades;
