import { EditOutlined, VisibilityOutlined } from "@mui/icons-material";
import {
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

const headers = ["Nazwa klasy", "Wychowawca", "Ilość uczniów", "Akcje"];

const rows = [
  {
    name: "I B",
    classTeacher: "Jan Pawlak",
    studentCount: 24,
  },
  {
    name: "II B",
    classTeacher: "Krzysztof Granus",
    studentCount: 17,
  },
  {
    name: "III B",
    classTeacher: "Zbigniew Robak",
    studentCount: 27,
  },
  {
    name: "IV B",
    classTeacher: "Bartosz Krzemyk",
    studentCount: 30,
  },
  {
    name: "V B",
    classTeacher: "Dawid Kopiec",
    studentCount: 22,
  },
];

const ClassesTable = () => {
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
            {rows.map(({ name, classTeacher, studentCount }) => (
              <TableRow
                key={name}
                sx={{
                  "&:last-child td": {
                    border: "none",
                  },
                }}>
                <TableCell>{name}</TableCell>
                <CenteredCell>{classTeacher}</CenteredCell>
                <CenteredCell>{studentCount}</CenteredCell>
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
