import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CenteredCell } from "common/components";
import { getAllSubjects } from "modules/lessonPlan/utils";

const headers = ["Przedmiot", "Obecności", "Nieobecnosci", "Spóźnienia"];

const AttendanceTable = () => {
  return (
    <Paper sx={{ overflow: "hidden" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, i) => (
                <TableCell key={header} align={i === 0 ? "left" : "center"}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {getAllSubjects().map((subject) => (
              <TableRow key={subject}>
                <TableCell>{subject}</TableCell>
                <CenteredCell>3</CenteredCell>
                <CenteredCell>1</CenteredCell>
                <CenteredCell>0</CenteredCell>
              </TableRow>
            ))}
            <TableRow
              sx={{
                backgroundColor: (theme) => theme.palette.action.hover,
                "& td": { border: "none" },
              }}>
              <TableCell
                sx={{
                  fontWeight: 700,
                  fontSize: (theme) => theme.typography.body1.fontSize,
                }}>
                Wszystkie
              </TableCell>
              {["21", "7", "0"].map((item) => (
                <CenteredCell
                  key={item}
                  tableCellProps={{
                    sx: {
                      fontWeight: 700,
                      fontSize: (theme) => theme.typography.body1.fontSize,
                    },
                  }}>
                  {item}
                </CenteredCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AttendanceTable;
