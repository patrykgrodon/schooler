import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { getAllSubjects } from "modules/lessonPlan/utils";

import GradesTableRow from "../GradesTableRow/GradesTableRow";

const headers = [
  "Przedmiot",
  "I Semestr",
  "II Semestr",
  "Średnia",
  "Ocena śródroczna",
  "Ocena końcowa",
];

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
              <GradesTableRow key={subject} subject={subject} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default GradesTable;
