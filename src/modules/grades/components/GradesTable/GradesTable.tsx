import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { lessonPlan } from "modules/lessonPlan/constants";

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
                <TableCell>4, 3, 2, 1</TableCell>
                <TableCell>4, 3, 2, 1</TableCell>
                <TableCell>2.5</TableCell>
                <TableCell>2.5</TableCell>
                <TableCell>2.5</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </TableContainer>
  );
};

export default GradesTable;
