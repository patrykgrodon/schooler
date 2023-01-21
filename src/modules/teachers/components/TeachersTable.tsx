import { EditOutlined, VisibilityOutlined } from "@mui/icons-material";
import {
  IconButton,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CenteredCell } from "common/components";

const headers = [
  "Imię Nazwisko",
  "Przedmiot",
  "Wychowawca klasy",
  "E-mail",
  "Akcje",
];

const rows = [
  {
    fullName: "Jan Pawlak",
    subject: "Biologia",
    classTeacher: "I B",
  },
  {
    fullName: "Krzysztof Granus",
    subject: "Chemia",
    classTeacher: "II B",
  },
  {
    fullName: "Zbigniew Robak",
    subject: "Religia",
    classTeacher: "III B",
  },
  {
    fullName: "Bartosz Krzemyk",
    subject: "Matematyka, Fizyka",
    classTeacher: "IV B",
  },
  {
    fullName: "Dawid Kopiec",
    subject: "Wychowanie fizyczne",
    classTeacher: "V B",
  },
  {
    fullName: "Mariusz Wnuk",
    subject: "Język polski",
    classTeacher: "---",
  },
];

const TeachersTable = () => {
  const getEmail = (fullName: string) =>
    fullName.toLowerCase().replaceAll(" ", "") + "@gmail.com";
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
            {rows.map(({ fullName, subject, classTeacher }) => (
              <TableRow
                key={fullName}
                sx={{
                  "&:last-child td": {
                    border: "none",
                  },
                }}>
                <TableCell>{fullName}</TableCell>
                <CenteredCell>{subject}</CenteredCell>
                <CenteredCell>{classTeacher}</CenteredCell>
                <CenteredCell>
                  <Link href={`mailto:${getEmail(fullName)}`}>
                    {getEmail(fullName)}
                  </Link>
                </CenteredCell>
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

export default TeachersTable;
