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
import { calcAvg } from "modules/grades/utils/calcAvg";
import { getAllSubjects } from "modules/lessonPlan/utils";
import Grade from "../Grade/Grade";

const headers = [
  "Przedmiot",
  "I Semestr",
  "II Semestr",
  "Średnia",
  "Ocena śródroczna",
  "Ocena końcowa",
];

const firstSemesterGrades = [4, 3, 2, 1];
const secondSemesterGrades = [6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1];

const GradesTable = () => {
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
              <TableRow
                key={subject}
                sx={{
                  "&:last-child td": {
                    border: "none",
                  },
                }}>
                <TableCell>{subject}</TableCell>
                <CenteredCell boxProps={{ sx: { columnGap: 1 } }}>
                  {firstSemesterGrades.map((score, i) => (
                    <Grade score={score} key={i} />
                  ))}
                </CenteredCell>
                <CenteredCell boxProps={{ sx: { columnGap: 1 } }}>
                  {secondSemesterGrades.map((score, i) => (
                    <Grade score={score} key={i} />
                  ))}
                </CenteredCell>
                <CenteredCell tableCellProps={{ sx: { width: "140px" } }}>
                  <Grade
                    score={calcAvg(
                      firstSemesterGrades.concat(secondSemesterGrades)
                    )}
                    average
                  />
                </CenteredCell>
                <CenteredCell tableCellProps={{ sx: { width: "140px" } }}>
                  <Grade score={2} />
                </CenteredCell>
                <CenteredCell tableCellProps={{ sx: { width: "140px" } }}>
                  <Grade score={3} />
                </CenteredCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default GradesTable;
