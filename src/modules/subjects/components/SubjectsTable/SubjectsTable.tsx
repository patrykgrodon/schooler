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

const headers = ["Nazwa przedmiotu", "Nauczyciele", "Akcje"];

const rows = [
  {
    name: "Biologia",
    teachers: ["Jan Pawlak"],
  },
  {
    name: "Chemia",
    teachers: ["Krzysztof Granus"],
  },
  {
    name: "Religia",
    teachers: ["Zbigniew Robak"],
  },
  {
    name: "Matematyka",
    teachers: ["Bartosz Krzemyk", "Zbigniew Robak"],
  },
  {
    name: "Fizyka",
    teachers: ["Bartosz Krzemyk"],
  },
  {
    name: "Wychowanie fizyczne",
    teachers: ["Dawid Kopiec"],
  },
  {
    name: "Język polski",
    teachers: ["Mariusz Wnuk"],
  },
];

const SubjectsTable = () => {
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
            {rows.map(({ name, teachers }) => (
              <TableRow
                key={name}
                sx={{
                  "&:last-child td": {
                    border: "none",
                  },
                }}>
                <TableCell>{name}</TableCell>
                <CenteredCell>{teachers.join(", ")}</CenteredCell>

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

export default SubjectsTable;
