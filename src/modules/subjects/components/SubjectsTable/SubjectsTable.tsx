import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { Subject } from "modules/subjects/types";
import SubjectsTableRow from "./SubjectsTableRow/SubjectsTableRow";

const headers = ["Nazwa przedmiotu", "Nauczyciele", "Akcje"];

type SubjectsTableProps = {
  subjects: Subject[];
};

const SubjectsTable = ({ subjects }: SubjectsTableProps) => {
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
            {subjects.map((subject) => (
              <SubjectsTableRow key={subject.id} subject={subject} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default SubjectsTable;
