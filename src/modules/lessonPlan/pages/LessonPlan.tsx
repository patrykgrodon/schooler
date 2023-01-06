import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const headers = ["", "Godz.", "Pon", "Wt", "Śr", "Czw", "Pt"];
const lessonPlan = {
  monday: [
    "Wychowanie fizyczne",
    "Język polski",
    "Biologia",
    "Matematyka",
    "Matematyka",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  tuesday: [
    "",
    "",
    "Religia",
    "Biologia",
    "Język polski",
    "Język polski",
    "Matematyka",
    "",
    "",
    "",
    "",
  ],
  wednesday: [
    "",
    "",
    "Historia",
    "Historia",
    "Język polski",
    "Biologia",
    "",
    "",
    "",
    "",
    "",
  ],
  thursday: [
    "",
    "Matematyka",
    "Język polski",
    "Religia",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  friday: [
    "",
    "",
    "",
    "",
    "Wychowanie fizyczne",
    "Wychowanie fizyczne",
    "Język polski",
    "Matematyka",
    "Biologia",
    "",
    "",
  ],
};

const lessonStructure = [
  "07:10 - 7:55",
  "08:00 - 08:45",
  "08:50 - 09:35",
  "09:45 - 10:30",
  "10:35 - 11:20",
  "11:35 - 12:20",
  "12:30 - 13:15",
  "13:20 - 14:05",
  "14:10 - 14:55",
  "15:00 - 15:45",
  "15:50 - 16:35",
];

const LessonPlan = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "90%",
      }}>
      <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
        Plan lekcji klasa IV B
      </Typography>
      <TableContainer sx={{ maxWidth: "1000px" }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {lessonStructure.map((el, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{lessonStructure[i] || "---"}</TableCell>
                <TableCell>{lessonPlan.monday[i] || "---"}</TableCell>
                <TableCell>{lessonPlan.tuesday[i] || "---"}</TableCell>
                <TableCell>{lessonPlan.wednesday[i] || "---"}</TableCell>
                <TableCell>{lessonPlan.thursday[i] || "---"}</TableCell>
                <TableCell>{lessonPlan.friday[i] || "---"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>{" "}
    </Box>
  );
};

export default LessonPlan;
