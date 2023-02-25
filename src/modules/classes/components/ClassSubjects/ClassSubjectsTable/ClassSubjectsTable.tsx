import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { ClassSubject } from "modules/subjects/types";
import ClassSubjectsTableRow from "./ClassSubjectsTableRow/ClassSubjectsTableRow";

const headers = ["Przedmiot", "Nauczyciel"];

type ClassSubjectsTableProps = {
  classSubjects: ClassSubject[];
};

const ClassSubjectsTable = ({ classSubjects }: ClassSubjectsTableProps) => {
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
            {classSubjects.map((classSubject) => (
              <ClassSubjectsTableRow
                key={classSubject.subject.id}
                classSubject={classSubject}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ClassSubjectsTable;
