import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { Student } from "modules/students/types";

import StudentsTableRow from "./StudentsTableRow/StudentsTableRow";

const headers = ["Imię Nazwisko", "Klasa", "E-mail", "Akcje"];

type StudentsTableProps = {
  students: Student[];
};

const StudentsTable = ({ students }: StudentsTableProps) => {
  const getCorrectHeaders = () => {
    return headers.filter((header) => {
      if (!students?.[0].class && header === "Klasa") return false;
      return true;
    });
  };
  return (
    <Paper sx={{ overflow: "hidden" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {getCorrectHeaders().map((header, i) => (
                <TableCell key={header} align={i === 0 ? "left" : "center"}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <StudentsTableRow key={student.id} student={student as Student} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default StudentsTable;
