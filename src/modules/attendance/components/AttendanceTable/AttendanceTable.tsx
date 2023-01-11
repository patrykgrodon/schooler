import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { getAllSubjects } from "modules/lessonPlan/utils";

const headers = ["Przedmiot", "Obecności", "Nieobecnosci", "Spóźnienia"];

const AttendanceTable = () => {
  return (
    <Paper sx={{ overflow: "hidden" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {getAllSubjects().map((subject) => (
              <TableRow key={subject}>
                <TableCell>{subject}</TableCell>
                <TableCell>3</TableCell>
                <TableCell>1</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
            ))}
            <TableRow
              sx={{
                backgroundColor: (theme) => theme.palette.action.hover,
                "& td": { border: "none" },
              }}>
              {["Wszystkie", "21", "7", "0"].map((item) => (
                <TableCell key={item}>
                  <Typography variant="body1" fontWeight={700}>
                    {item}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AttendanceTable;
