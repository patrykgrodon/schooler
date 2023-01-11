import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const GradesTable = () => {
  return (
    <TableContainer>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Przedmiot</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>język polski</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </TableContainer>
  );
};

export default GradesTable;
