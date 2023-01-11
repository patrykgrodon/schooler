import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { lessonPlan } from "modules/lessonPlan/constants";
import Grade from "../Grade/Grade";

const headers = [
  "Przedmiot",
  "I Semestr",
  "II Semestr",
  "Średnia",
  "Ocena śródroczna",
  "Ocena końcowa",
];

const getAllSubjects = () => {
  const keys = Object.keys(lessonPlan) as (keyof typeof lessonPlan)[];
  const subjects: string[] = [];
  keys.forEach((key) => {
    lessonPlan[key].forEach((subject) => {
      if (subjects.includes(subject) || subject === "") return;
      subjects.push(subject);
    });
  });

  return subjects;
};

const GradesTable = () => {
  return (
    <TableContainer>
      <Paper>
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
                <TableCell>
                  <Box sx={{ display: "flex", columnGap: 1 }}>
                    <Grade score={4} />
                    <Grade score={3} />
                    <Grade score={2} />
                    <Grade score={1} />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", columnGap: 1 }}>
                    <Grade score={6} />
                    <Grade score={5} />
                    <Grade score={4} />
                    <Grade score={3} />
                    <Grade score={2} />
                    <Grade score={1} />
                  </Box>
                </TableCell>
                <TableCell>
                  <Grade score={2.5} />
                </TableCell>
                <TableCell>
                  <Grade score={2} />
                </TableCell>
                <TableCell>
                  <Grade score={3} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </TableContainer>
  );
};

export default GradesTable;
