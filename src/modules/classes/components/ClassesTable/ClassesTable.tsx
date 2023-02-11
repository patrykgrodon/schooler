import { EditOutlined, VisibilityOutlined } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CenteredCell } from "common/components";
import { ClassType } from "modules/classes/types";
import { generatePath, Link } from "react-router-dom";
import routes from "routes/routePaths";

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
            {classes.map(({ name, classTeacher, students, id }) => (
              <TableRow
                key={id}
                sx={{
                  "&:last-child td": {
                    border: "none",
                  },
                }}>
                <TableCell>
                  <Box
                    sx={{
                      color: (theme) => theme.palette.text.primary,
                      textDecoration: "none",
                    }}
                    component={Link}
                    to={generatePath(routes.Class, { classId: id })}>
                    <strong>{name}</strong>
                  </Box>
                </TableCell>
                <CenteredCell>
                  {classTeacher
                    ? `${classTeacher.firstName} ${classTeacher.lastName}`
                    : "---"}
                </CenteredCell>
                <CenteredCell>{students.length}</CenteredCell>
                <CenteredCell>
                  {[VisibilityOutlined, EditOutlined].map((Icon, i) => (
                    <IconButton
                      key={i}
                      size="small"
                      sx={{ "&:not(:last-child)": { mr: 1 } }}>
                      <Icon fontSize="small" />
                    </IconButton>
                  ))}
                </CenteredCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ClassesTable;
