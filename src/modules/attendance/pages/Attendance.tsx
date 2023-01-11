import { Box, Typography } from "@mui/material";
import { AttendanceTable } from "../components";

const Attendance = () => {
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
        Obecności
      </Typography>
      <AttendanceTable />
    </Box>
  );
};

export default Attendance;
