import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { Teacher } from "modules/teachers/types";
import TeachersTableRow from "./TeachersTableRow/TeachersTableRow";

const headers = [
  "Imię Nazwisko",
  "Przedmiot",
  "Wychowawca klasy",
  "E-mail",
  "Akcje",
];

type TeachersTableProps = {
  teachers: Teacher[];
};

const TeachersTable = ({ teachers }: TeachersTableProps) => {
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
            {teachers.map((teacher) => (
              <TeachersTableRow key={teacher.id} teacher={teacher} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TeachersTable;
