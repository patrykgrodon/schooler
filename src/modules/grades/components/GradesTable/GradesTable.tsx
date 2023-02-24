import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { StudentGrade } from "modules/grades/types";

import GradesTableRow from "../GradesTableRow/GradesTableRow";

const headers = [
  "Przedmiot",
  "I Semestr",
  "II Semestr",
  "Średnia",
  "Ocena śródroczna",
  "Ocena końcowa",
];

type GradesTableProps = {
  grades: StudentGrade[];
};

const GradesTable = ({ grades }: GradesTableProps) => {
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
            {grades.map((grade) => (
              <GradesTableRow key={grade.subject.id} grade={grade} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default GradesTable;
