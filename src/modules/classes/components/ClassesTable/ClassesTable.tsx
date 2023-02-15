import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { ClassType } from "modules/classes/types";

import ClassesTableRow from "./ClassesTableRow/ClassesTableRow";

const headers = ["Nazwa klasy", "Wychowawca", "Ilość uczniów", "Akcje"];

type ClassesTableProps = {
  classes: ClassType[];
};

const ClassesTable = ({ classes }: ClassesTableProps) => {
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
            {classes.map((classObj) => (
              <ClassesTableRow key={classObj.id} class={classObj} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ClassesTable;
